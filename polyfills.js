// web-extension-polyfill will either return polyfilled apis or the browser
// object, so it should be safe to overwrite the global value
global.browser = require('webextension-polyfill')
