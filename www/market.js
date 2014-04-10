/**
 * Cordova Market plugin
 * Author: Miguel Revetria <miguel@xmartlabs.com>
 * License: Apache 2.0
 */
var exec = require('cordova/exec');

function Market() { }

Market.prototype.open = function(appId, callbackContext) {
    callbackContext = callbackContext || { };
    exec(callbackContext.success || null, callbackContext.error || null, 'Market', 'open', [appId]);
};

var market = new Market();
module.exports = market;