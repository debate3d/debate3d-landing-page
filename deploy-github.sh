#!/bin/bash

# clear dist folder
yarn run clean

# build the project
yarn run build

# deploy project
cd dist

# deploy to github
rm -rf .git/
git init
git remote add origin "https://github.com/emanuelgsouza/debate3d-landing-page.git"
git add .
git commit -am "deploy"
git push origin master:gh-pages --force
