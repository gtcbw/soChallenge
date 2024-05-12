import type { Color } from '@/models/Color';
import type { Product } from '@/models/Product';
import type { Size } from '@/models/Size';
import { ProductService } from '@/services/ProductService';
import { defineStore } from 'pinia';

interface State {
  visible: boolean;
  product: Product | undefined;
  selectedColor: Color | undefined;
  selectedSize: Size | undefined;
  imageShiftX: string;

}
export const useOverlayStore = defineStore('overlay', {
  state: () : State => ({ 
    visible: false, 
    product: undefined, 
    selectedColor: undefined, 
    selectedSize: undefined, 
    imageShiftX: '0px'
  }),
  actions: {
    showOverlay() {
      this.visible = true;
    },
    hideOverlay() {
      this.visible = false;
      this.imageShiftX = '0px';
      this.selectedColor = this.product?.availableProducts.at(0)?.color;
      this.selectedSize = this.product?.availableProducts.at(0)?.size.at(0);
    },
    fetchProduct(id: number) {
      const service = new ProductService();
      this.product = service.getProduct(id);
      this.selectedColor = this.product.availableProducts.at(0)?.color;
      this.selectedSize = this.product.availableProducts.at(0)?.size.at(0);
    },
    selectColor(color: Color) {
      this.selectedColor = color;
      const selectedIndex = this.product?.images.findIndex(x => x.color === color) ?? 0;
      this.imageShiftX = `-${selectedIndex * 388}px`;
    },
    selectSize(size: Size) {
      this.selectedSize = size;
    }
  }
});
