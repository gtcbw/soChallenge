import type { AvailableProductConfiguration } from './AvailableProductConfiguration';
import type { DescriptionCollection } from './DescriptionCollection';
import type { Image } from './Image';

export interface Product {
  id: number;
  priceEuro: number;
  name: string;
  images: Image[];
  availableProducts: AvailableProductConfiguration[];
  descriptions: DescriptionCollection[];
}