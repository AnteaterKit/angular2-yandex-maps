(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var WindowRef = (function () {
        function WindowRef() {
        }
        WindowRef.prototype.getNativeWindow = function () { return window; };
        return WindowRef;
    }());
    exports.WindowRef = WindowRef;
    var DocumentRef = (function () {
        function DocumentRef() {
        }
        DocumentRef.prototype.getNativeDocument = function () { return document; };
        return DocumentRef;
    }());
    exports.DocumentRef = DocumentRef;
    exports.BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
});
//# sourceMappingURL=browser-globals.js.map