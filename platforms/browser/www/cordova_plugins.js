cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.zafeplace.cordova/www/zafeplace.js",
        "id": "com.zafeplace.cordova.CordovaPluginZafeplace",
        "pluginId": "com.zafeplace.cordova",
        "clobbers": [
            "zafeplace"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.zafeplace.cordova": "0.1.0",
    "cordova-plugin-whitelist": "1.3.3"
}
// BOTTOM OF METADATA
});