cordova.define("com.zafeplace.cordova.CordovaPluginZafeplace", function(require, exports, module) { var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'cordova-plugin-zafeplace', 'coolMethod', [arg0]);
};

});
