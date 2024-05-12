import type { Color } from "./Color";
import type { Size } from "./Size";

export interface AvailableProductConfiguration {
  size: Size[];
  color: Color;
  colorPreview: string;
}
