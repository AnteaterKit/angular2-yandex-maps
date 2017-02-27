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
var ya_maps_api_wrapper_1 = require("../../ya-maps-api-wrapper");
var ClasterManager = (function () {
    function ClasterManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._clasters = new Map();
    }
    ClasterManager.prototype.addClaster = function (claster) {
        var clasterPromise = this._mapsWrapper.createClaster(claster);
        this._clasters.set(claster, clasterPromise);
    };
    return ClasterManager;
}());
ClasterManager = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ya_maps_api_wrapper_1.YaMapsAPIWrapper, core_1.NgZone])
], ClasterManager);
exports.ClasterManager = ClasterManager;
//# sourceMappingURL=claster-manager.js.map