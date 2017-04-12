"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var ymap_1 = require("./directives/ymap");
var marker_1 = require("./directives/marker");
var claster_1 = require("./directives/claster");
var objectManager_1 = require("./directives/objectManager");
var ya_maps_loader_1 = require("./services/ya-maps-loader");
var browser_globals_1 = require("./utils/browser-globals");
__export(require("./ya-maps-types"));
function coreDirectives() {
    return [
        ymap_1.YaMap,
        marker_1.YaMarker,
        claster_1.YaClaster,
        objectManager_1.YaObjectManager
    ];
}
exports.coreDirectives = coreDirectives;
;
var YaCoreModule = YaCoreModule_1 = (function () {
    function YaCoreModule() {
    }
    YaCoreModule.forRoot = function () {
        return {
            ngModule: YaCoreModule_1,
            providers: browser_globals_1.BROWSER_GLOBALS_PROVIDERS.concat([
                { provide: ya_maps_loader_1.YaMapsAPILoader, useClass: ya_maps_loader_1.YaMapsAPILoader }
            ]),
        };
    };
    return YaCoreModule;
}());
YaCoreModule = YaCoreModule_1 = __decorate([
    core_1.NgModule({ declarations: coreDirectives(), exports: coreDirectives() })
], YaCoreModule);
exports.YaCoreModule = YaCoreModule;
function YaCoreModuleForRoot() {
    return [
        YaCoreModule.forRoot()
    ];
}
exports.YaCoreModuleForRoot = YaCoreModuleForRoot;
var YaCoreModule_1;
//# sourceMappingURL=core.module.js.map