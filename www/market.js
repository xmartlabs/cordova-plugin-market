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

Market.prototype.search = function(key, callbackContext) {
    callbackContext = callbackContext || { };
    exec(callbackContext.success || null, callbackContext.error || null, 'Market', 'search', [key]);
};

var market = new Market();
module.exports = market;
