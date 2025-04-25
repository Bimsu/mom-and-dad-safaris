
export interface SliderImage {
  sizes?: string;
  src: string;
  type?: string;
}

interface SliderLayout {
  offset: number;
  stride: number;
}

interface PositionOptions {
  enableHighAccuracy?: boolean;
  maximumAge?: number;
  timeout?: number;
}

interface PropertyIndexedKeyframes {
  composite?: CompositeOperationOrAuto | CompositeOperationOrAuto[];
  easing?: string | string[];
  offset?: number | (number | null)[];
  [property: string]: string | string[] | number | null | (number | null)[] | undefined;
}

interface Transformer<I = any, O = any> {
  flush?: TransformerFlushCallback<O>;
  readableType?: undefined;
  start?: TransformerStartCallback<O>;
  transform?: TransformerTransformCallback<I, O>;
  writableType?: undefined;
}

interface TransitionEventInit extends EventInit {
  elapsedTime?: number;
  propertyName?: string;
  pseudoElement?: string;
}