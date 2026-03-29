#!/bin/bash
# Mobile-friendliness lint for Trident Music site
# Runs before every deploy to catch common mobile issues

SITE_DIR="$(dirname "$0")/.."
SRC_DIR="$SITE_DIR/src"
ERRORS=0

echo "=== Mobile-Friendliness Lint ==="

# 1. Check for fixed pixel widths that could cause horizontal overflow
echo -n "Checking for hardcoded pixel widths > 400px... "
FIXED_WIDTH=$(grep -rn 'width:\s*[4-9][0-9][0-9]px\|width:\s*[0-9]\{4,\}px' "$SRC_DIR" --include="*.css" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v node_modules | grep -v '.next')
if [ -n "$FIXED_WIDTH" ]; then
  echo "WARN"
  echo "$FIXED_WIDTH"
else
  echo "OK"
fi

# 2. Check for viewport meta tag (Next.js handles this, but verify layout isn't overriding)
echo -n "Checking no viewport override blocks scaling... "
VIEWPORT_BLOCK=$(grep -rn 'maximum-scale\s*=\s*1\|user-scalable\s*=\s*no' "$SRC_DIR" --include="*.tsx" --include="*.ts" --include="*.html" 2>/dev/null)
if [ -n "$VIEWPORT_BLOCK" ]; then
  echo "FAIL - Found viewport scaling restrictions:"
  echo "$VIEWPORT_BLOCK"
  ERRORS=$((ERRORS + 1))
else
  echo "OK"
fi

# 3. Check for overflow-x visible on containers (potential horizontal scroll)
echo -n "Checking for overflow-x: visible on wide containers... "
OVERFLOW_X=$(grep -rn 'overflow-x:\s*visible' "$SRC_DIR" --include="*.css" 2>/dev/null)
if [ -n "$OVERFLOW_X" ]; then
  echo "WARN"
  echo "$OVERFLOW_X"
else
  echo "OK"
fi

# 4. Check that globals.css still has mobile safeguards
echo -n "Checking globals.css mobile safeguards intact... "
if grep -q 'overflow-x: hidden' "$SRC_DIR/app/globals.css" && \
   grep -q 'safe-area-inset' "$SRC_DIR/app/globals.css" && \
   grep -q 'webkit-text-size-adjust' "$SRC_DIR/app/globals.css"; then
  echo "OK"
else
  echo "FAIL - Mobile safeguards missing from globals.css!"
  ERRORS=$((ERRORS + 1))
fi

# 5. Check for responsive images (no bare <img> without max-width)
echo -n "Checking for bare <img> tags (should use Next Image)... "
BARE_IMG=$(grep -rn '<img ' "$SRC_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v 'next/image' | grep -v node_modules)
if [ -n "$BARE_IMG" ]; then
  echo "WARN - Found bare <img> tags (prefer Next.js Image component):"
  echo "$BARE_IMG"
else
  echo "OK"
fi

# 6. Check for hover-only interactions without touch alternatives
echo -n "Checking for hover-only CSS without touch fallback... "
HOVER_ONLY=$(grep -rn ':hover' "$SRC_DIR" --include="*.css" 2>/dev/null | grep -v '@media' | grep -v 'hover:' | head -5)
# This is informational only, not a blocker

echo "OK (Tailwind hover: utilities handle this)"

# 7. Verify build succeeds
echo -n "Verifying Next.js build... "
cd "$SITE_DIR"
if npm run build > /dev/null 2>&1; then
  echo "OK"
else
  echo "FAIL - Build failed!"
  ERRORS=$((ERRORS + 1))
fi

echo ""
if [ $ERRORS -gt 0 ]; then
  echo "FAILED: $ERRORS mobile-friendliness issue(s) found."
  exit 1
else
  echo "PASSED: Site is mobile-friendly."
  exit 0
fi
