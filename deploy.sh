#!/usr/bin/env sh

# stop deploy if errors
set -e

# build
npm run build

# go to dist
cd dist

git init
git add -A
git commit -m 'deploy'

# publish
git push -f git@github.com:anastasiaprivalova/Channels.git master:gh-pages

cd -