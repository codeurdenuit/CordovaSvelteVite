# Poc Cordova Svelte

Testing Cordova's limits  
Find out how to handle pre-built apps  
import data packets  
export data packets 

Tech : Cordova + ViteJS + Svelte + Scss

## Installation
```sh
npm install -g cordova
npm install
cordova platform add electron
cordova platform add android
cordova plugin add cordova-plugin-file
cordova plugin add cordova-plugin-file-transfer
```

## Dev Browser
To develop in live reload on browser
```sh
npm run dev
```
open http://localhost:3000/
cordova is not loaded because not used

## Dev Electron
To develop in live reload on Windows app
```sh
npm run dev
npm run electron_dev
```
open setup.exe

## Build Electron
To package for Windows app
```sh
npm run electron_prod
```
open setup.exe

## Build android
```sh
npm run android_prod
```
open the apk in your phone



## Fix android
Fix

MyCordovaRef\platforms\electron\platform_www\plugins\cordova-plugin-file\src\browser\FileProxy.js
l 33
```sh
if (false && require('./isChrome')()) {
  FileSystem proxy is ignore with eletron....
```

Fix compil Java
https://github.com/apache/cordova-plugin-file-transfer/issues/306

