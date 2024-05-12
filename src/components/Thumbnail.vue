<script setup lang="ts">
  const props = defineProps<{
    productId: number
  }>();
  import { useOverlayStore } from '@/stores/overlay';
  const overlayState = useOverlayStore();
  const showOverlay = () => { overlayState.fetchProduct(props.productId); overlayState.showOverlay(); };
</script>

<template>
  <button class="thumbnail" @click="showOverlay">
    <img src="https://media.soliver.com/i/soliver/2141203.59N3_front?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=250" loading="lazy" alt="open details" />
  </button>
</template>

<style scoped>
  .thumbnail {
    cursor: pointer;
    opacity: 1.0;
    transition: 500ms;
  }
  .thumbnail:hover {
    opacity: 0.75;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  }
</style>
