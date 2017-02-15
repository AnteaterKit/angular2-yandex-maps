"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ymap_1 = require("./directives/ymap");
var marker_1 = require("./directives/marker");
var ya_maps_loader_1 = require("./services/ya-maps-loader");
var browser_globals_1 = require("./utils/browser-globals");
/**
 * @internal
 */
function coreDirectives() {
    return [
        ymap_1.YaMap,
        marker_1.YaMarker
    ];
}
exports.coreDirectives = coreDirectives;
;
/**
 * The angular-ya-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `YaCoreModule.forRoot()` in your app module.
 */
var YaCoreModule = YaCoreModule_1 = (function () {
    function YaCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
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
var YaCoreModule_1;
//# sourceMappingURL=core.module.js.map