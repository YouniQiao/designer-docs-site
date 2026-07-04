#!/usr/bin/env python3
"""Sync API docs from gitcode source to Docusaurus project.

Usage: python3 sync-docs.py <source_dir> <target_dir> [--dry-run] [--date YYYY-MM-DD]
"""
import hashlib
import os
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path


# Mapping: (source_subdir, lang, target_base_key)
# lang="en" → docs/    lang="zh" → i18n/zh-CN/.../
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


def file_hash(path: str) -> str:
    """SHA256 of file content."""
    with open(path, "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()


def scan_source(source_dir: str) -> dict:
    """
    Scan source directory and return:
      { "kit_slug": { "js-api": {"en": {rel: path}, "zh": {rel: path}}, "c-api": {...} } }
    """
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
        # Has frontmatter — find closing ---
        end_idx = content.find("\n---\n", 4)
        if end_idx == -1:
            return  # malformed, skip

        fm = content[4:end_idx]
        if re.search(r"^last_update:", fm, re.MULTILINE):
            # Check if flat format: last_update: YYYY-MM-DD
            if re.match(r"^last_update:\s*\d{4}-\d{2}-\d{2}\s*$", fm, re.MULTILINE):
                # Convert flat to object format
                new_fm = re.sub(
                    r"^last_update:\s*\d{4}-\d{2}-\d{2}\s*$",
                    f"last_update:\n  date: {date_str}",
                    fm,
                    flags=re.MULTILINE,
                )
            else:
                # Object format: update date line
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
        # No frontmatter — shouldn't happen after initial batch, but handle it
        return

    filepath.write_text(content, encoding="utf-8")


def sync(source_dir: str, target_dir: str, dry_run: bool = False, date_str: str = None):
    """Sync docs from source to target Docusaurus project."""
    kits = scan_source(source_dir)
    target = Path(target_dir)
    docs_en = target / "docs"
    docs_zh = target / "i18n" / "zh-CN" / I18N_PREFIX

    stats = {"added": 0, "updated": 0, "skipped": 0, "removed": 0}

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

                    if dest.exists():
                        if file_hash(src_path) == file_hash(str(dest)):
                            stats["skipped"] += 1
                            continue
                        stats["updated"] += 1
                    else:
                        stats["added"] += 1

                    if not dry_run:
                        dest.parent.mkdir(parents=True, exist_ok=True)
                        shutil.copy2(src_path, str(dest))
                        # Update last_update for changed/new files
                        if dest.suffix == ".md":
                            update_last_update(dest, date_str)

    # Print summary
    print(f"Sync complete:")
    print(f"  Added:   {stats['added']}")
    print(f"  Updated: {stats['updated']}")
    print(f"  Skipped: {stats['skipped']}")
    print(f"  Removed: {stats['removed']}")

    has_changes = stats["added"] > 0 or stats["updated"] > 0 or stats["removed"] > 0
    return has_changes


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Sync API docs from gitcode source")
    parser.add_argument("source", help="Path to cloned gitcode source")
    parser.add_argument("target", help="Path to Docusaurus project")
    parser.add_argument("--dry-run", action="store_true", help="Show what would change without modifying files")
    parser.add_argument("--date", default=None, help="Date for last_update (default: today)")
    args = parser.parse_args()

    date_str = args.date or datetime.now().strftime("%Y-%m-%d")
    has_changes = sync(args.source, args.target, args.dry_run, date_str)
    sys.exit(0 if has_changes else 1)
