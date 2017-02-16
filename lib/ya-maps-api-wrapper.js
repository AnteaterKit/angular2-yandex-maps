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
var ya_maps_loader_1 = require("./services/ya-maps-loader");
var browser_globals_1 = require("./utils/browser-globals");
var YaMapsAPIWrapper = (function () {
    function YaMapsAPIWrapper(_loader, _zone, d) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._documentRef = d;
        this._map = new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    YaMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        var res = this._loader.load().then(function () {
            var create = function () { return setTimeout(function () {
                if (ymaps.Map) {
                    var map = new ymaps.Map(el, mapOptions);
                    _this._mapResolver(map);
                }
                else {
                    create();
                }
            }, 100); };
            create();
        }).catch(function (e) { return console.log(e); });
        return res;
    };
    YaMapsAPIWrapper.prototype.createMarker = function (marker) {
        return this._map.then(function (map) {
            var m = new ymaps.Placemark([marker.latitude, marker.longitude], {});
            map.geoObjects.add(m);
            return m;
        });
    };
    YaMapsAPIWrapper.prototype.checkYaSciptLoaded = function () {
        return this._documentRef.getNativeDocument().getElementById('YaScript');
    };
    return YaMapsAPIWrapper;
}());
YaMapsAPIWrapper = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ya_maps_loader_1.YaMapsAPILoader, core_1.NgZone, browser_globals_1.DocumentRef])
], YaMapsAPIWrapper);
exports.YaMapsAPIWrapper = YaMapsAPIWrapper;
//# sourceMappingURL=ya-maps-api-wrapper.js.map