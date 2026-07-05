#!/usr/bin/env python3
"""Sync API docs from gitcode source to Docusaurus project.

Two modes:
  1. Full scan (no --changed-files): hash-compare all files — use for first run
  2. Git-diff mode (--changed-files FILE): process only files that changed upstream

Usage:
  python3 sync-docs.py <source_dir> <target_dir> [--dry-run] [--date YYYY-MM-DD]
  python3 sync-docs.py <source_dir> <target_dir> --changed-files <diff.txt> [--dry-run] [--date YYYY-MM-DD]
"""
import hashlib
import os
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path
from typing import Optional, Tuple

SOURCE_MAPPINGS = [
    ("interface_sdk-js-md", "en", "docs"),
    ("interface_sdk-js-md", "zh-cn", "i18n"),
    ("interface_sdk_c-md", "en", "docs"),
    ("interface_sdk_c-md", "zh-cn", "i18n"),
]

I18N_PREFIX = "docusaurus-plugin-content-docs/current"


def kit_slug(name: str) -> str:
    """apis-ability-kit → ability-kit"""
    return name.replace("apis-", "").replace("_", "-")


def normalized_content(path: str) -> str:
    """Read file content, normalize CRLF→LF and strip last_update from frontmatter."""
    with open(path, "r", encoding="utf-8", newline="") as f:
        content = f.read()
    content = content.replace("\r\n", "\n")
    if content.startswith("---\n"):
        end_idx = content.find("\n---\n", 4)
        if end_idx != -1:
            fm = content[4:end_idx]
            fm_cleaned = re.sub(
                r"^last_update:.*(?:\n  .*)*",
                "",
                fm,
                flags=re.MULTILINE,
            )
            fm_cleaned = re.sub(r"\n{3,}", "\n\n", fm_cleaned).strip("\n")
            if fm_cleaned:
                content = f"---\n{fm_cleaned}\n{content[end_idx:]}"
            else:
                content = content[end_idx + 4:].lstrip("\n")
    return content


def file_hash(path: str) -> str:
    """SHA256 of normalized file content."""
    return hashlib.sha256(normalized_content(path).encode("utf-8")).hexdigest()


def scan_source(source_dir: str) -> dict:
    """Full scan: {kit_slug: {api_type: {lang: {rel: path}}}}"""
    kits = {}
    base = Path(source_dir)

    for src_subdir, lang, _ in SOURCE_MAPPINGS:
        ref_dir = base / src_subdir / lang / "application-dev" / "reference"
        if not ref_dir.is_dir():
            continue

        is_js = "js" in src_subdir
        api_type = "js-api" if is_js else "c-api"
        lang_key = "zh" if lang == "zh-cn" else "en"

        for kit_dir in ref_dir.iterdir():
            if not kit_dir.is_dir():
                continue
            slug = kit_slug(kit_dir.name)
            if slug not in kits:
                kits[slug] = {}
            if api_type not in kits[slug]:
                kits[slug][api_type] = {"en": {}, "zh": {}}

            for child in kit_dir.iterdir():
                if not child.is_dir():
                    continue
                for fpath in child.rglob("*"):
                    if fpath.is_file():
                        rel = str(fpath.relative_to(child))
                        kits[slug][api_type][lang_key][rel] = str(fpath)

    return kits


def update_last_update(filepath: Path, date_str: str):
    """Update the last_update field in a .md file's frontmatter."""
    content = filepath.read_text(encoding="utf-8")

    if content.startswith("---\n"):
        end_idx = content.find("\n---\n", 4)
        if end_idx == -1:
            return
        fm = content[4:end_idx]
        if re.search(r"^last_update:", fm, re.MULTILINE):
            if re.match(r"^last_update:\s*\d{4}-\d{2}-\d{2}\s*$", fm, re.MULTILINE):
                new_fm = re.sub(
                    r"^last_update:\s*\d{4}-\d{2}-\d{2}\s*$",
                    f"last_update:\n  date: {date_str}",
                    fm,
                    flags=re.MULTILINE,
                )
            else:
                new_fm = re.sub(
                    r"(last_update:\n\s+date:).*",
                    f"\\1 {date_str}",
                    fm,
                    flags=re.MULTILINE,
                    count=1,
                )
            if new_fm != fm:
                content = f"---\n{new_fm}\n{content[end_idx + 1:]}"
        else:
            new_fm = fm.rstrip() + f"\nlast_update:\n  date: {date_str}"
            content = f"---\n{new_fm}\n{content[end_idx + 1:]}"
    else:
        return

    filepath.write_text(content, encoding="utf-8")


def parse_gitcode_path(source_path: str) -> Optional[Tuple]:
    """Parse a gitcode source path into (lang_key, kit_slug, api_type, rel_path).

    Returns None if the path doesn't match expected patterns.
    """
    path = Path(source_path)
    parts = path.parts

    # Expected: <subdir>/<lang>/application-dev/reference/<kit>/<subdir>/<rest>
    # e.g. interface_sdk-js-md/en/application-dev/reference/apis-ability-kit/js-apis-ability/foo.md

    try:
        # Find the lang position
        lang_idx = None
        for i, p in enumerate(parts):
            if p in ("en", "zh-cn"):
                lang_idx = i
                break
        if lang_idx is None:
            return None

        src_subdir = parts[lang_idx - 1] if lang_idx > 0 else ""
        lang = parts[lang_idx]

        # After lang: application-dev/reference/<kit>/...
        if lang_idx + 2 >= len(parts):
            return None
        if parts[lang_idx + 1] != "application-dev" or parts[lang_idx + 2] != "reference":
            return None

        kit_idx = lang_idx + 3
        if kit_idx >= len(parts):
            return None

        kit_name = parts[kit_idx]
        slug = kit_slug(kit_name)

        is_js = "js" in src_subdir
        api_type = "js-api" if is_js else "c-api"
        lang_key = "zh" if lang == "zh-cn" else "en"

        # Relative path within the kit: everything after the kit's first subdir
        # The kit directory contains subdirs like "js-apis-ability", "arkts-apis", etc.
        # We take the path relative to those subdirectories
        # Actually, we follow the same logic as scan_source: iterate over kit_dir children
        # and take paths relative to those children.
        # For git-diff mode, we need to replicate this: skip the kit_dir, then the first
        # child (which is the "root" of relative paths), then the rest is rel_path.
        if kit_idx + 1 >= len(parts):
            # File directly inside kit dir
            rel_path = parts[kit_idx + 1] if kit_idx + 1 < len(parts) else ""
            # But this shouldn't happen in practice; files are inside subdirs
            return None

        # The relative path is everything after the first subdir inside the kit
        child_idx = kit_idx + 1
        rel_path = str(Path(*parts[child_idx + 1:])) if child_idx + 1 < len(parts) else ""

        return (lang_key, slug, api_type, rel_path)

    except (IndexError, ValueError):
        return None


def path_to_target(source_path: str, target_dir: str) -> Optional[Path]:
    """Map a gitcode source path to a Docusaurus target path.

    Returns the target Path, or None if unmappable.
    """
    parsed = parse_gitcode_path(source_path)
    if parsed is None:
        return None

    lang_key, slug, api_type, rel_path = parsed
    target = Path(target_dir)

    if lang_key == "en":
        return target / "docs" / slug / api_type / rel_path
    else:
        return target / "i18n" / "zh-CN" / I18N_PREFIX / slug / api_type / rel_path


def sync_file(src_path: str, dest: Path, date_str: str, dry_run: bool) -> str:
    """Sync a single file. Returns 'added', 'updated', 'skipped', or 'deleted'."""
    if dest.exists():
        if file_hash(src_path) == file_hash(str(dest)):
            return "skipped"

    if dry_run:
        action = "updated" if dest.exists() else "added"
        print(f"  [{action}] {dest.relative_to(dest.anchor)}")
        return action

    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src_path, str(dest))
    if dest.suffix == ".md":
        update_last_update(dest, date_str)

    return "updated" if dest.exists() else "added"


def delete_file(dest: Path, dry_run: bool) -> str:
    """Delete a target file. Returns 'deleted' or 'skipped'."""
    if not dest.exists():
        return "skipped"

    if dry_run:
        print(f"  [deleted] {dest.relative_to(dest.anchor)}")
        return "deleted"

    dest.unlink()
    # Clean up empty parent directories
    parent = dest.parent
    while parent != dest.anchor and parent != Path("/"):
        try:
            if not any(parent.iterdir()):
                parent.rmdir()
                parent = parent.parent
            else:
                break
        except OSError:
            break

    return "deleted"


def sync_full(source_dir: str, target_dir: str, dry_run: bool, date_str: str) -> dict:
    """Full scan + hash-compare (original mode)."""
    kits = scan_source(source_dir)
    target = Path(target_dir)
    docs_en = target / "docs"
    docs_zh = target / "i18n" / "zh-CN" / I18N_PREFIX

    stats = {"added": 0, "updated": 0, "skipped": 0, "deleted": 0}

    for slug, api_types in sorted(kits.items()):
        for api_type, lang_files in api_types.items():
            targets = {
                "en": docs_en / slug / api_type,
                "zh": docs_zh / slug / api_type,
            }
            for lang_key, files in lang_files.items():
                base = targets[lang_key]
                for rel_path, src_path in files.items():
                    dest = base / rel_path
                    result = sync_file(src_path, dest, date_str, dry_run)
                    stats[result] += 1

    return stats


def sync_diff(source_dir: str, target_dir: str, changes_file: str, dry_run: bool, date_str: str) -> dict:
    """Process only files listed by git diff --name-status."""
    stats = {"added": 0, "updated": 0, "skipped": 0, "deleted": 0}

    if not os.path.isfile(changes_file):
        print("⚠️  Changes file not found, nothing to do.")
        return stats

    with open(changes_file, "r", encoding="utf-8") as f:
        lines = [l.rstrip("\n") for l in f if l.strip()]

    if not lines:
        print("📊 No upstream changes.")
        return stats

    source = Path(source_dir)

    for line in lines:
        # Parse: STATUS\tpath  (or STATUS  path with spaces)
        parts = line.split("\t", 1)
        if len(parts) != 2:
            parts = line.split(None, 1)
            if len(parts) != 2:
                print(f"⚠️  Skipping unparseable line: {line}")
                continue

        status, rel_path = parts[0].strip(), parts[1].strip()

        if status == "D":
            # Deleted upstream → remove target file
            dest = path_to_target(rel_path, target_dir)
            if dest is None:
                print(f"⚠️  Cannot map deleted path: {rel_path}")
                continue
            result = delete_file(dest, dry_run)
            stats[result] += 1
            continue

        if status in ("A", "M", "R"):
            # Added / Modified / Renamed → copy from source
            src_path = source / rel_path
            if not src_path.exists():
                print(f"⚠️  Source file not found (status={status}): {rel_path}")
                continue

            dest = path_to_target(rel_path, target_dir)
            if dest is None:
                print(f"⚠️  Cannot map path: {rel_path}")
                continue

            result = sync_file(str(src_path), dest, date_str, dry_run)
            stats[result] += 1
            continue

        print(f"⚠️  Unknown status '{status}' for: {rel_path}")

    return stats


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Sync API docs from gitcode source")
    parser.add_argument("source", help="Path to cloned gitcode source")
    parser.add_argument("target", help="Path to Docusaurus project")
    parser.add_argument("--dry-run", action="store_true", help="Show what would change without modifying files")
    parser.add_argument("--date", default=None, help="Date for last_update (default: today)")
    parser.add_argument("--changed-files", default=None, help="git diff --name-status output (enables incremental mode)")
    args = parser.parse_args()

    date_str = args.date or datetime.now().strftime("%Y-%m-%d")

    if args.changed_files:
        # Incremental mode: process only changed files
        print("🔄 Incremental sync (git diff mode)...")
        stats = sync_diff(args.source, args.target, args.changed_files, args.dry_run, date_str)
    else:
        # Full scan mode
        print("🔄 Full scan (hash comparison mode)...")
        stats = sync_full(args.source, args.target, args.dry_run, date_str)

    print(f"\nSync complete:")
    print(f"  Added:   {stats['added']}")
    print(f"  Updated: {stats['updated']}")
    print(f"  Skipped: {stats['skipped']}")
    print(f"  Deleted: {stats['deleted']}")

    has_changes = any(v > 0 for v in stats.values())
    return 0 if has_changes else 1


if __name__ == "__main__":
    sys.exit(main())
