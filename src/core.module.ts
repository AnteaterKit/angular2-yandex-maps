import { ModuleWithProviders, NgModule } from '@angular/core';
import { YaMap } from './directives/ymap';
import { YaMarker } from './directives/marker';
import { YaClaster } from './directives/claster';
import { YaObjectManager } from './directives/objectManager';
import { YaMapsAPILoader } from './services/ya-maps-loader';
import { BROWSER_GLOBALS_PROVIDERS } from './utils/browser-globals';

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
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: YaCoreModule,
      providers: [
        ...BROWSER_GLOBALS_PROVIDERS, { provide: YaMapsAPILoader, useClass: YaMapsAPILoader }
      ],
    };
  }
}

export function YaCoreModuleForRoot() {
  return [
    YaCoreModule.forRoot()
  ];
}
