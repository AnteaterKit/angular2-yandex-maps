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
var Observable_1 = require("rxjs/Observable");
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
    YaMapsAPIWrapper.prototype.setCenter = function (latitude, longitude) {
        this._map.then(function (map) {
            map.setCenter([latitude, longitude]);
        });
    };
    YaMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) {
            return map.getCenter();
        });
    };
    YaMapsAPIWrapper.prototype.panTo = function (points, options) {
        this._map.then(function (map) {
            map.panTo(points, options);
        });
    };
    YaMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._map.then(function (m) {
                m.events.add(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    YaMapsAPIWrapper.prototype.createMarker = function (marker) {
        return this._map.then(function (map) {
            var m = new ymaps.Placemark([marker.latitude, marker.longitude], { balloonContentHeader: marker.balloonContentHeader,
                balloonContentBody: marker.balloonContentBody,
                balloonContentFooter: marker.balloonContentFooter,
                iconContent: marker.iconContent
            }, {
                draggable: marker.draggable,
                preset: marker.preset,
                iconLayout: marker.iconLayout,
                iconImageHref: marker.iconImageHref,
                iconImageSize: marker.iconImageSize,
                iconImageOffset: marker.iconImageOffset
            });
            map.geoObjects.add(m);
            return m;
        });
    };
    YaMapsAPIWrapper.prototype.removeGeo = function (overlay) {
        this._map.then(function (map) {
            map.geoObjects.remove(overlay);
        });
    };
    YaMapsAPIWrapper.prototype.createClaster = function (claster) {
        return this._map.then(function (map) {
            if (claster.markers.length == 0)
                return;
            var myGeoObjects;
            myGeoObjects = new Array();
            claster.markers.forEach(function (x) {
                var point = new ymaps.GeoObject({
                    geometry: { type: x.type, coordinates: [x.lat, x.lng] }
                });
                myGeoObjects.push(point);
            });
            var clusterer = new ymaps.Clusterer({});
            clusterer.add(myGeoObjects);
            map.geoObjects.add(clusterer);
            return clusterer;
        });
    };
    YaMapsAPIWrapper.prototype.createObjectManager = function (objectManager) {
        return this._map.then(function (map) {
            if (objectManager.datasource.length == 0)
                return;
            var nativeObjectManager = new ymaps.ObjectManager({
                clusterize: objectManager.clusterize,
                gridSize: objectManager.gridSize
            });
            nativeObjectManager.add(objectManager.datasource);
            nativeObjectManager.objects.options.set('preset', objectManager.objectPreset);
            nativeObjectManager.clusters.options.set('preset', objectManager.clasterPreset);
            map.geoObjects.add(nativeObjectManager);
            return nativeObjectManager;
        });
    };
    YaMapsAPIWrapper.prototype.navigateToGeoObject = function (objectManager, id) {
        var obj = objectManager.objects.getById(id);
        if (obj) {
            this.setCenter(obj.geometry.coordinates[0], obj.geometry.coordinates[1]);
            objectManager.objects.balloon.open(id);
        }
    };
    YaMapsAPIWrapper.prototype.checkYaSciptLoaded = function () {
        return this._documentRef.getNativeDocument().getElementById('YaScript');
    };
    YaMapsAPIWrapper.prototype.objectManagerSetFilter = function (objectManager, filter) {
        objectManager.setFilter(filter);
    };
    YaMapsAPIWrapper = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ya_maps_loader_1.YaMapsAPILoader, core_1.NgZone, browser_globals_1.DocumentRef])
    ], YaMapsAPIWrapper);
    return YaMapsAPIWrapper;
}());
exports.YaMapsAPIWrapper = YaMapsAPIWrapper;
//# sourceMappingURL=ya-maps-api-wrapper.js.map