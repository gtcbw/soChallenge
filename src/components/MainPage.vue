<script setup lang="ts">
  import Thumbnail from './Thumbnail.vue';
  import Overlay from './Overlay.vue';
  import ProductOverview from './ProductOverview/ProductOverview.vue';
  import { useOverlayStore } from '@/stores/overlay';

  const overlayState = useOverlayStore();

  const product = {
    productId: 1
  };
</script>

<template>
  <Thumbnail :productId="product.productId" />
  <Overlay v-if="overlayState.visible"><ProductOverview /></Overlay>
</template>
