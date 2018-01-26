#!/bin/bash

echo "Build landing page"
# build the project
yarn run generate

echo "clean firebase/public folder"
rm -rf ../debate3d-firebase/public/*

# copy the all folder to public firebase project
cp -R ./dist/* ../debate3d-firebase/public

# go to firebase project
cd ../debate3d-firebase/

echo ""
echo "Deploy to Firebase"
# deploy to firebase
firebase deploy
