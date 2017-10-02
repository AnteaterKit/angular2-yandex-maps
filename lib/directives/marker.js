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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ya_maps_api_wrapper_1 = require("../ya-maps-api-wrapper");
var marker_manager_1 = require("../services/managers/marker-manager");
var markerId = 0;
var YaMarker = (function () {
    function YaMarker(_markerManager) {
        this._markerManager = _markerManager;
        this.draggable = false;
        this.preset = 'islands#blueIcon';
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this.markerClick = new core_1.EventEmitter();
        this.dragEnd = new core_1.EventEmitter();
        this._id = (markerId++).toString();
    }
    YaMarker.prototype.ngOnChanges = function (changes) {
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes["showInfo"]) {
            this._markerManager.showBalloon(this);
        }
    };
    YaMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            _this._markerManager.showBalloon(_this);
            _this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        var ds = this._markerManager.createEventObservable('dragend', this).subscribe(function (e) {
            var thisPlacemark = e.get('target');
            var coords = thisPlacemark.geometry.getCoordinates();
            _this._markerManager.getNativeMarker(_this).then(function (m) {
                _this.dragEnd.emit({ lat: coords[0], lng: coords[1], nativeMarker: m });
            });
        });
        this._observableSubscriptions.push(ds);
    };
    YaMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    YaMarker = __decorate([
        core_1.Directive({
            selector: 'ya-marker',
            providers: [
                ya_maps_api_wrapper_1.YaMapsAPIWrapper
            ],
            inputs: [
                'latitude', 'longitude', 'balloonLayout', 'balloonContentHeader', 'balloonContentBody', 'balloonContentFooter',
                'draggable', 'preset', 'iconContent', 'showInfo', 'iconLayout', 'iconImageHref', 'iconImageSize', 'iconImageOffset'
            ],
            outputs: ['markerClick', 'dragEnd']
        }),
        __metadata("design:paramtypes", [marker_manager_1.MarkerManager])
    ], YaMarker);
    return YaMarker;
}());
exports.YaMarker = YaMarker;
//# sourceMappingURL=marker.js.map