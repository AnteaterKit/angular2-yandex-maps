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
var ya_maps_api_wrapper_1 = require("../ya-maps-api-wrapper");
var claster_manager_1 = require("../services/managers/claster-manager");
var clasterId = 0;
var YaClaster = (function () {
    function YaClaster(_clasterManager) {
        this._clasterManager = _clasterManager;
        this._markerAddedToManger = false;
        this._id = (clasterId++).toString();
    }
    YaClaster.prototype.ngOnChanges = function (changes) {
        if (!this._markerAddedToManger) {
            this._clasterManager.addClaster(this);
        }
    };
    YaClaster.prototype._addEventListeners = function () {
    };
    YaClaster.prototype.ngOnDestroy = function () {
    };
    return YaClaster;
}());
YaClaster = __decorate([
    core_1.Directive({
        selector: 'ya-claster',
        providers: [
            ya_maps_api_wrapper_1.YaMapsAPIWrapper
        ],
        inputs: ['markers']
    }),
    __metadata("design:paramtypes", [claster_manager_1.ClasterManager])
], YaClaster);
exports.YaClaster = YaClaster;
//# sourceMappingURL=claster.js.map