# Saturn

A Bitcoin Wallet.

## Installation

```
npm install
```

then apply these fixes

1. go to
   `node_modules/react-native-keychain/RNKeychain.podspec` and remove `s.visionos.deployment_target = '1.0'`

2. go to
   `node_modules/react-native-svg/RNSVG.podspec` and remove `s.visionos.exclude_files = '**/*.macos.{h,m,mm}'`

and then

```
npm start
```
