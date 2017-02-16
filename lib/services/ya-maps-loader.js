"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var browser_globals_1 = require("./../utils/browser-globals");
var YaMapsAPILoader = (function () {
    function YaMapsAPILoader(w, d) {
        this._windowRef = w;
        this._documentRef = d;
    }
    YaMapsAPILoader.prototype.load = function () {
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = false;
        script.defer = true;
        script.id = 'YaScript';
        var callbackName = "angular2YAMapsAPILoader";
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&callback=angular2YAMapsAPILoader';
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            script.onload = function () { resolve(); };
            script.onerror = function (error) { reject(); };
        });
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    return YaMapsAPILoader;
}());
YaMapsAPILoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [browser_globals_1.WindowRef, browser_globals_1.DocumentRef])
], YaMapsAPILoader);
exports.YaMapsAPILoader = YaMapsAPILoader;
//# sourceMappingURL=ya-maps-loader.js.map