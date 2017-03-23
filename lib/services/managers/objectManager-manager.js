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
var ObjectManagerManager = (function () {
    function ObjectManagerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._managers = new Map();
    }
    ObjectManagerManager.prototype.add = function (manager) {
        var managerPromise = this._mapsWrapper.createObjectManager(manager);
        this._managers.set(manager, managerPromise);
    };
    ObjectManagerManager.prototype.navigateToGeoObject = function (manager, id) {
        var _this = this;
        this.getNativeManager(manager).then(function (p) {
            _this._mapsWrapper.navigateToGeoObject(p, id);
        });
    };
    ObjectManagerManager.prototype.getNativeManager = function (manager) {
        return this._managers.get(manager);
    };
    ObjectManagerManager.prototype.setFilter = function (manager, filter) {
        var _this = this;
        this.getNativeManager(manager).then(function (p) {
            _this._mapsWrapper.objectManagerSetFilter(p, filter);
        });
    };
    return ObjectManagerManager;
}());
ObjectManagerManager = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ya_maps_api_wrapper_1.YaMapsAPIWrapper, core_1.NgZone])
], ObjectManagerManager);
exports.ObjectManagerManager = ObjectManagerManager;
//# sourceMappingURL=objectManager-manager.js.map