#!/usr/bin/env python3
"""Add or update last_update frontmatter in all .md files.

Usage: python3 add-last-update.py <target_dir> [--date YYYY-MM-DD]
"""
import os
import sys
import re
from datetime import datetime
from pathlib import Path


def add_last_update(filepath: Path, date_str: str) -> bool:
    """Add or update last_update frontmatter. Returns True if modified."""
    content = filepath.read_text(encoding="utf-8")
    original = content

    # Check if already has frontmatter (starts with ---)
    if content.startswith("---\n"):
        # Find closing ---
        end_idx = content.find("\n---\n", 4)
        if end_idx == -1:
            # Malformed frontmatter, skip
            return False

        fm = content[4:end_idx]

        # Check if last_update already exists
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
            if new_fm == fm:
                return False  # same date
            content = f"---\n{new_fm}\n{content[end_idx + 1:]}"
        else:
            # Insert before closing ---
            new_fm = fm.rstrip() + f"\nlast_update:\n  date: {date_str}"
            content = f"---\n{new_fm}\n{content[end_idx + 1:]}"
    else:
        # No frontmatter, prepend one
        content = f"---\nlast_update:\n  date: {date_str}\n---\n\n{content}"

    if content != original:
        filepath.write_text(content, encoding="utf-8")
        return True
    return False


def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("target", help="Root directory of .md files")
    parser.add_argument("--date", help="Date string (YYYY-MM-DD)", default=None)
    args = parser.parse_args()

    date_str = args.date or datetime.now().strftime("%Y-%m-%d")
    target = Path(args.target)

    updated = 0
    total = 0

    for md_file in sorted(target.rglob("*.md")):
        total += 1
        if add_last_update(md_file, date_str):
            updated += 1
        if total % 500 == 0:
            print(f"  Processed {total} files... ({updated} updated)")

    print(f"\nDone: {total} total, {updated} updated with date={date_str}")


if __name__ == "__main__":
    main()
