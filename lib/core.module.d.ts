import { ModuleWithProviders } from '@angular/core';
import { YaMap } from './directives/ymap';
import { YaMarker } from './directives/marker';
import { YaClaster } from './directives/claster';
export * from './ya-maps-types';
export declare function coreDirectives(): (typeof YaMarker | typeof YaClaster | typeof YaMap)[];
export declare class YaCoreModule {
    static forRoot(): ModuleWithProviders;
}
