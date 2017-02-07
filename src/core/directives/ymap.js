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
var ya_maps_api_wrapper_1 = require('../ya-maps-api-wrapper');
var YaMap = (function () {
    function YaMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
    }
    YaMap.prototype.ngOnInit = function () {
        var container = this._elem.nativeElement.querySelector('.map-container-inner');
        this._initMapInstance(container);
    };
    YaMap.prototype._initMapInstance = function (el) {
        this._mapsWrapper.createMap(el, {});
    };
    YaMap = __decorate([
        core_1.Component({
            selector: 'ya-map',
            providers: [
                ya_maps_api_wrapper_1.YaMapsAPIWrapper
            ],
            template: "\n    <div class=\"map-container-inner\" id=\"map\" style=\"width: 600px; height: 400px\"></div>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, (typeof (_a = typeof ya_maps_api_wrapper_1.YaMapsAPIWrapper !== 'undefined' && ya_maps_api_wrapper_1.YaMapsAPIWrapper) === 'function' && _a) || Object])
    ], YaMap);
    return YaMap;
    var _a;
}());
exports.YaMap = YaMap;
//# sourceMappingURL=ymap.js.map