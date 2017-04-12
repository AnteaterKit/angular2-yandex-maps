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
var marker_manager_1 = require("../services/managers/marker-manager");
var claster_manager_1 = require("../services/managers/claster-manager");
var objectManager_manager_1 = require("../services/managers/objectManager-manager");
var YaMap = (function () {
    function YaMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this.longitude = 0;
        this.latitude = 0;
        this.zoom = 8;
        this.mapType = 'yandex#map';
        this.controls = [];
        this.mapInit = false;
        this._observableSubscriptions = [];
        this.mapClick = new core_1.EventEmitter();
        this.actionTick = new core_1.EventEmitter();
    }
    YaMap.prototype.ngOnInit = function () {
        var container = this._elem.nativeElement.querySelector('.map-container-inner');
        this._initMapInstance(container);
        this.mapInit = true;
    };
    YaMap.prototype._initMapInstance = function (el) {
        if (this.controls.length > 0) {
            this._mapsWrapper.createMap(el, { center: [this.latitude, this.longitude], zoom: this.zoom, type: this.mapType,
                controls: this.controls });
        }
        else {
            this._mapsWrapper.createMap(el, { center: [this.latitude, this.longitude], zoom: this.zoom, type: this.mapType });
        }
        this._handleMapMouseEvents();
    };
    YaMap.prototype.ngOnChanges = function (changes) {
        if (this.mapInit) {
            this.updatePosition(changes);
            this.panTo(changes);
        }
    };
    YaMap.prototype.updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null) {
            return;
        }
        this._mapsWrapper.setCenter(this.latitude, this.longitude);
    };
    YaMap.prototype.panTo = function (changes) {
        if (changes['panToObjects'] == null) {
            return;
        }
        this._mapsWrapper.panTo(this.panToObjects.points, this.panToObjects.params);
    };
    YaMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var clickEvents = [
            { name: 'click', emitter: this.mapClick }
        ];
        var events = [
            { name: 'actiontick', emitter: this.actionTick }
        ];
        clickEvents.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var coords = event.get('coords');
                var value = { lat: coords[0], lng: coords[1] };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                _this._mapsWrapper.getCenter().then(function (coords) {
                    _this.latitude = coords[0];
                    _this.longitude = coords[1];
                    var value = { lat: coords[0], lng: coords[1] };
                    e.emitter.emit(value);
                });
            });
            _this._observableSubscriptions.push(s);
        });
    };
    return YaMap;
}());
YaMap = __decorate([
    core_1.Component({
        selector: 'ya-map',
        providers: [
            ya_maps_api_wrapper_1.YaMapsAPIWrapper,
            marker_manager_1.MarkerManager,
            claster_manager_1.ClasterManager,
            objectManager_manager_1.ObjectManagerManager
        ],
        inputs: [
            'longitude', 'latitude', 'zoom', 'minZoom', 'maxZoom', 'mapType', 'controls', 'panToObjects'
        ],
        outputs: ['mapClick', 'actionTick'],
        template: "\n    <div class=\"map-container-inner\" id=\"map\" >\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, ya_maps_api_wrapper_1.YaMapsAPIWrapper])
], YaMap);
exports.YaMap = YaMap;
//# sourceMappingURL=ymap.js.map