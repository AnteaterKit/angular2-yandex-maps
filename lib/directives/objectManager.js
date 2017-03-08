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
var objectManager_manager_1 = require("../services/managers/objectManager-manager");
var markerId = 0;
var YaObjectManager = (function () {
    function YaObjectManager(_manager) {
        this._manager = _manager;
        this.clusterize = false;
        this.clasterPreset = 'islands#blueIcon';
        this.objectPreset = 'islands#blueClusterIcons';
        this.gridSize = 0;
        this._observableSubscriptions = [];
        this._addedToManger = false;
        this._id = (markerId++).toString();
    }
    YaObjectManager.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManger) {
            this._manager.add(this);
            this._addedToManger = true;
            return;
        }
        if (changes["selectedObjectId"]) {
            this._manager.navigateToGeoObject(this, this.selectedObjectId);
        }
    };
    return YaObjectManager;
}());
YaObjectManager = __decorate([
    core_1.Directive({
        selector: 'ya-object-manager',
        providers: [
            ya_maps_api_wrapper_1.YaMapsAPIWrapper
        ],
        inputs: ['clusterize', 'datasource', 'clasterPreset', 'objectPreset', 'gridSize', 'selectedObjectId']
    }),
    __metadata("design:paramtypes", [objectManager_manager_1.ObjectManagerManager])
], YaObjectManager);
exports.YaObjectManager = YaObjectManager;
//# sourceMappingURL=objectManager.js.map