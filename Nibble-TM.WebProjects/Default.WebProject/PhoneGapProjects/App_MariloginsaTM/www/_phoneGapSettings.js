function _phoneGapSettings() { 
 return {
    "appId": "com.yourcompany.yourapp",
    "preferences": {
        "permissions": "",
        "orientation": "default",
        "target-device": "universal",
        "fullscreen": "false",
        "webviewbounce": "true",
        "prerendered-icon": "false",
        "stay-in-webview": "false",
        "ios-statusbarstyle": "default",
        "detect-data-types": "true",
        "exit-on-suspend": "false",
        "show-splash-screen-spinner": "true",
        "auto-hide-splash-screen": "true",
        "disable-cursor": "false",
        "android-minSdkVersion": "19",
        "android-installLocation": "internalOnly",
        "phonegap-version": "cli-7.1.0",
        "FadeSplashScreen": "true",
        "FadeSplashScreenDuration": "2",
        "EnableViewportScale": "false",
        "MediaPlaybackRequiresUserAction": "true",
        "AllowInlineMediaPlayback": "true",
        "TopActivityIndicator": "gray",
        "BackupWebStorage": "none",
        "iosPersistentFileLocation": "Library",
        "KeyboardDisplayRequiresUserAction": "true",
        "SurpressesIncrementalRendering": "true",
        "android-maxSdkVersion": "",
        "android-targetSdkVersion": "",
        "KeepRunning": "true",
        "splash-screen-duration": "5000",
        "ErrorUrl": "error.html",
        "LoadingDialog": "Please wait, the app is loading.",
        "LoadingPageDialog": "Please wait, the data is loading.",
        "LoadUrlTimeoutValue": "20000",
        "AndroidPersistentFileLocation": "Internal",
        "android-build-tool": "gradle",
        "pgb-builder-version": "2"
    },
    "plugins": {
        "cordova-plugin-network-information": "npm",
        "cordova-plugin-splashscreen": "npm",
        "cordova-plugin-whitelist": "npm",
        "cordova-plugin-dialogs": "npm",
        "cordova-plugin-file": "npm",
        "cordova-plugin-file-transfer": "npm",
        "cordova-plugin-android-permissions": "npm",
        "cordova-plugin-device": "npm",
        "cordova-plugin-camera": "npm",
        "cordova-plugin-zip": "npm",
        "cordova-plugin-x-toast": "npm",
        "https://github.com/zho/phonegap-imeiplugin.git": "git",
        "https://github.com/hygieiasoft/cordova-plugin-uid.git": "git",
        "pdf417-phonegap": "npm"
    }
};
}