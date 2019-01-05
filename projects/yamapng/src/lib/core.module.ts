import { ModuleWithProviders, NgModule } from '@angular/core';
import { YaMarker } from './directives/marker';
import { YaClaster } from './directives/claster';
import { YaObjectManager } from './directives/objectManager';
import { YaMapsAPILoader, YaMapsAPILoaderConfigLiteral, LAZY_MAPS_API_CONFIG } from './services/ya-maps-loader';
import { BROWSER_GLOBALS_PROVIDERS } from './utils/browser-globals';
import { YaMap } from './directives/ymap';

export * from './ya-maps-types';

/**
 * @internal
 */
export function coreDirectives() {
  return [
    YaMap,
    YaMarker,
    YaClaster,
    YaObjectManager
  ];
}

/**
 * The angular-ya-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `YaCoreModule.forRoot()` in your app module.
 */
@NgModule({ declarations: coreDirectives(), exports: coreDirectives() })
export class YaCoreModule {
  /**
   * Please use this method when you register the module at the root level.
   */
  public static forRoot(yaMapsAPILoaderConfig: YaMapsAPILoaderConfigLiteral): ModuleWithProviders {
    return {
      ngModule: YaCoreModule,
      providers: [
        ...BROWSER_GLOBALS_PROVIDERS,
        { provide: YaMapsAPILoader, useClass: YaMapsAPILoader },
        { provide: LAZY_MAPS_API_CONFIG, useValue: yaMapsAPILoaderConfig }
      ],
    };
  }
}

export function YaCoreModuleForRoot(yaMapsAPILoaderConfig: YaMapsAPILoaderConfigLiteral) {
  return [
    YaCoreModule.forRoot(yaMapsAPILoaderConfig)
  ];
}
