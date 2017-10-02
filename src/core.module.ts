import { ModuleWithProviders, NgModule } from '@angular/core';
import { YaMapDirective } from './directives/ymap.directive';
import { YaMarkerDirective } from './directives/yamarker.directive';
import { YaClasterDirective } from './directives/claster.directive';
import { YaObjectManager } from './directives/yaObjectManager.directive';
import { YaMapsAPILoader } from './services/ya-maps-loader';
import { BROWSER_GLOBALS_PROVIDERS } from './utils/browser-globals';

export * from './ya-maps-types';

/**
 * @internal
 */
export function coreDirectives() {
  return [
    YaMapDirective,
    YaMarkerDirective,
    YaClasterDirective,
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
