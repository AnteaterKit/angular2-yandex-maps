export var yandex: any;

export interface YandexMap extends MVCObject {

  constructor(el: HTMLElement, opts?: MapOptions): void;
}

export interface MVCObject { addListener(eventName: string, handler: Function): MapsEventListener; }

export interface MapsEventListener { remove(): void; }

export interface MapOptions {
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  center?: any;
}
