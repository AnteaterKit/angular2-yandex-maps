export let yandex: any;

export interface YandexMap extends MVCObject {

  // constructor(el: HTMLElement, opts?: MapOptions): void;
  events: any;
  geoObjects: any;
  setCenter(param: any[]): void;
  getCenter(): any;
  panTo(points: any[], options: any[]): void;
  removeOverlay(overlay: any): void;
}

export interface LatLng {
  // constructor(lat: number, lng: number): void;
  lat(): number;
  lng(): number;
}
export interface PanToObjects {
  points: any[];
  params: any[];
}

export interface Marker extends MVCObject {
  // constructor(): void;
  events: any;
  balloon: any;
  layoutBalloon: any;
  balloonContentHeader: string;
  balloonContentBody: string;
  balloonContentFooter: string;
  draggable: boolean;
  iconLayout: any;
  iconImageHref: any;
  iconImageSize: any;
  iconImageOffset: any;
  setMap(map: YandexMap): void;
  setPosition(latLng: LatLng | LatLngLiteral): void;
}

export interface Claster {
  // tslint:disable-next-line:no-misused-new
  constructor(): void;
}

export interface MarkerClaster {
  lat: number;
  lng: number;
  balloonContentHeader: string;
  balloonContentBody: string;
  balloonContentFooter: string;
  type: string;
}

export interface LatLngLiteral {
  lat: number;
  lng: number;
}

// tslint:disable-next-line:ban-types
export interface MVCObject { addListener(eventName: string, handler: Function): MapsEventListener; }

export interface MapsEventListener { remove(): void; }
export interface MouseEvent { latLng: LatLng; get: any; }
export interface MapClickMouseEvent { lat: number; lng: number; }
export interface MapMouseEvent { lat: number; lng: number; nativeMarker: any; }
export interface MapOptions {
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  center?: any;
  type: any;
  controls?: any[];
}

export interface ObjectManager {
  clusterize: boolean;
  objects: any[];
}
