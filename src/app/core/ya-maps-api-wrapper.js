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
var core_1 = require('@angular/core');
var ya_maps_loader_1 = require('./services/ya-maps-loader');
var YaMapsAPIWrapper = (function () {
    function YaMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    YaMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        setTimeout(function () {
            var map = new ymaps.Map(el, mapOptions);
            _this._mapResolver(map);
            console.log('Mauu');
            //  this.createMarker();
        }, 10000);
        return this._loader.load().then(function () {
            console.log('Ma');
            var map = new ymaps.Map(el, mapOptions);
            _this._mapResolver(map);
            return;
        }).catch(function (e) { return console.log(e); });
    };
    YaMapsAPIWrapper.prototype.createMarker = function (marker) {
        return this._map.then(function (map) {
            var m = new ymaps.Placemark([marker.latitude, marker.longitude], {}); //([55.847, 37.6], {});
            map.geoObjects.add(m);
            return m;
        });
    };
    YaMapsAPIWrapper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ya_maps_loader_1.YaMapsAPILoader, core_1.NgZone])
    ], YaMapsAPIWrapper);
    return YaMapsAPIWrapper;
}());
exports.YaMapsAPIWrapper = YaMapsAPIWrapper;
//# sourceMappingURL=ya-maps-api-wrapper.js.map