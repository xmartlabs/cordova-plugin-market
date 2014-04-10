cordova-plugin-market
=====================

Cordova (PhoneGap) 3.0+ plugin to open an application on Google Play or iTunes.
This plugin is compatible only with Android and iOS.

#Instalation

This plugin follows the Cordova 3.0 plugin spec, so it can be installed through the Cordova CLI in your existing Cordova project:

    cordova plugin add https://github.com/xmartlabs/cordova-plugin-market

#How to use it

When you want to open the device's store do this:

    cordova.market.open('your.app.bundle.id')

You could also add a success and failure callback like this:

    cordova.market.open('your.app.bundle.id', {
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