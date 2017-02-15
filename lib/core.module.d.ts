import { ModuleWithProviders } from '@angular/core';
import { YaMap } from './directives/ymap';
import { YaMarker } from './directives/marker';
export declare function coreDirectives(): (typeof YaMarker | typeof YaMap)[];
export declare class YaCoreModule {
    static forRoot(): ModuleWithProviders;
}
