import {ModuleWithProviders, NgModule} from '@angular/core';
import {YaMap} from './directives/ymap';
import {YaMapsAPILoader} from './services/ya-maps-loader';
import {BROWSER_GLOBALS_PROVIDERS} from './utils/browser-globals';

/**
 * @internal
 */
export function coreDirectives() {
  return [
    YaMap
  ];
};

/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `YaCoreModule.forRoot()` in your app module.
 */
@NgModule({declarations: coreDirectives(), exports: coreDirectives()})
export class YaCoreModule {
  /**
   * Please use this method when you register the module at the root level.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: YaCoreModule,
      providers: [
        ...BROWSER_GLOBALS_PROVIDERS, {provide: YaMapsAPILoader, useClass: YaMapsAPILoader}
      ],
    };
  }
}