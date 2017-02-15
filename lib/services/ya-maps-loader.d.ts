import { DocumentRef, WindowRef } from './../utils/browser-globals';
export declare class YaMapsAPILoader {
    private _scriptLoadingPromise;
    private _windowRef;
    private _documentRef;
    constructor(w: WindowRef, d: DocumentRef);
    load(): Promise<void>;
}
