cordova-plugin-market
=====================

Cordova (PhoneGap) 3.0+ plugin to open an application on Google Play or iTunes.
This plugin is compatible only with Android and iOS.

#Installation

This plugin follows the Cordova 3.0 plugin spec, so it can be installed through the Cordova CLI in your existing Cordova project:

    cordova plugin add https://github.com/xmartlabs/cordova-plugin-market

#How to use it

When you want to open the device's store do this:

* For Android use the app's package:

    `cordova.plugins.market.open('your.app.package')`

* For iOS, first you need to create an easy-to-read link to your app using App Store Short Links, then use the app name

    `cordova.plugins.market.open('yourappname')`

This will open the link `itms-apps://itunes.com/app/yourappname`

You can also add a success and failure callback like this:
    
    var appId = "...";
    cordova.plugins.market.open(appId, {
      success: function() {
        // Your stuff here
      },
      failure: function() {
        // Your stuff here
      }
    })

#Release Notes

Version 1.0

* Initial release: support for open Google Play or iTunes with an Application ID

#Contact

If you are using cordova-plugin-market in your app and have any suggestion or question:

Gonzalo Melo, <gonzalo@xmartlabs.com>

Miguel Revetria, <miguel@xmartlabs.com>

[@xmartlabs](http://twitter.com/xmartlabs "@xmartlabs")
