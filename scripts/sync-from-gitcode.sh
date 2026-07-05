#!/bin/bash
# Sync API docs from gitcode.com using git diff for incremental updates.
# Designed to run on the ECS self-hosted runner.
set -euo pipefail

SOURCE_DIR="/tmp/designer-docs-source"
CHANGES_FILE="/tmp/sync-changes.txt"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

GITCODE_URL="https://gitcode.com/openharmony_devops/designer-docs.git"

if [ -d "$SOURCE_DIR/.git" ]; then
    # ── Incremental: fetch and diff ──
    echo "📡 Fetching updates from gitcode.com..."
    git -C "$SOURCE_DIR" fetch origin master --depth=1 2>&1 | tail -3

    git -C "$SOURCE_DIR" diff --name-status HEAD FETCH_HEAD > "$CHANGES_FILE"
    CHANGE_COUNT=$(wc -l < "$CHANGES_FILE" | tr -d ' ')
    echo "📊 $CHANGE_COUNT files changed upstream"

    if [ "$CHANGE_COUNT" -eq 0 ]; then
        echo "✅ No upstream changes."
        rm -f "$CHANGES_FILE"
        exit 0
    fi

    MODE="--changed-files $CHANGES_FILE"
else
    # ── First run: full clone + full sync ──
    echo "📡 First run: cloning from gitcode.com..."
    rm -rf "$SOURCE_DIR"
    git clone --depth=1 --branch master "$GITCODE_URL" "$SOURCE_DIR" 2>&1 | tail -3
    MODE=""
    echo "" > "$CHANGES_FILE"  # empty placeholder
fi

echo ""
echo "🔄 Syncing docs..."
cd "$PROJECT_DIR"
python3 scripts/sync-docs.py "$SOURCE_DIR" "$PROJECT_DIR" --date "$(date +%Y-%m-%d)" $MODE || true

# ── Advance source repo to latest ──
if [ -d "$SOURCE_DIR/.git" ] && [ -f "$CHANGES_FILE" ] && [ -s "$CHANGES_FILE" ]; then
    echo ""
    echo "📌 Updating source repo to latest..."
    git -C "$SOURCE_DIR" merge FETCH_HEAD --ff-only 2>/dev/null || \
    git -C "$SOURCE_DIR" reset --hard FETCH_HEAD
fi

rm -f "$CHANGES_FILE"

# ── Commit local changes ──
echo ""
echo "🧹 Checking for local changes..."
cd "$PROJECT_DIR"
if git diff --quiet && git diff --cached --quiet; then
    echo "✅ No changes detected, skipping commit."
    exit 0
fi

echo ""
echo "📝 Committing changes..."
git add docs/ i18n/
git commit -m "sync: update API docs from gitcode [automated]" || true

echo "✅ Sync complete."
