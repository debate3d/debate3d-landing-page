#!/bin/bash

echo "Clear dist folder"
# clear dist folder
yarn run clean

echo ""
echo "Build landing page"
# build the project
yarn run build

# deploy project
cd dist

# create app folder on landing dist folder
mkdir app

# go to debate3d-site project
cd ../../debate3d-site/

echo ""
echo "Build the platform"
# build the platform
yarn run deploy-site

# copy the all dist folder to app folder on landing-page project
cp -R ./dist/* ../debate3d-landing-page/dist/app

# go to landing-page project
cd ../debate3d-landing-page/

# copy the all folder to public firebase project
cp -R ./dist/* ../debate3d-firebase/public

# go to firebase project
cd ../debate3d-firebase/

echo "clean firebase/public folder"
rm -rf public/*

echo ""
echo "Deploy to Firebase"
# deploy to firebase
firebase deploy
