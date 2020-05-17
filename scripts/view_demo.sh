#!/usr/bin/env sh

HUGO_THEME=clean hugo \
  --source exampleSite \
  --themesDir ../../ \
  --bind=0.0.0.0 -p 1315 \
  --baseURL=http://0.0.0.0:1315 \
  --minify \
  -e "development" \
  server
