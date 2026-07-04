#!/bin/bash
# Sync API docs from gitcode.com and commit changes if any.
# Designed to run on the ECS self-hosted runner.
set -euo pipefail

SOURCE_DIR="/tmp/designer-docs-source"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "📡 Cloning from gitcode.com..."
rm -rf "$SOURCE_DIR"
git clone --depth=1 --branch master \
  https://gitcode.com/openharmony_devops/designer-docs.git \
  "$SOURCE_DIR" 2>&1 | tail -3

echo ""
echo "🔄 Syncing docs..."
cd "$PROJECT_DIR"
python3 scripts/sync-docs.py "$SOURCE_DIR" "$PROJECT_DIR" --date "$(date +%Y-%m-%d)"

echo ""
echo "🧹 Cleaning up..."
rm -rf "$SOURCE_DIR"

# Check if there are git changes
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
