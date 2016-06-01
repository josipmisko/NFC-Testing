cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/phonegap-nfc/www/phonegap-nfc.js",
        "id": "phonegap-nfc.NFC",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "phonegap-nfc": "0.6.6",
    "cordova-plugin-statusbar": "2.1.3"
};
// BOTTOM OF METADATA
});