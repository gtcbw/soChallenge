<script setup lang="ts">
  import { useOverlayStore } from '@/stores/overlay';
  const overlayState = useOverlayStore();
  const imageArray = overlayState.product?.images.map(x=>x.url);
</script>

<template>
  <div class="imageFrame">
    <div class="images">
      <img v-for="imageUrl in imageArray" :src=imageUrl loading="lazy" width="388px" height="549px" />
    </div>
    <div class="dots">
      <div v-for="image in overlayState.product?.images">
        <div v-if="image.color === overlayState.selectedColor" class="dotLarge" />
        <div v-if="image.color !== overlayState.selectedColor" class="dot" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .imageFrame {
    width: 388px;
    height: 549px;
    overflow: hidden;
    position: relative;
  }
  .images {
    display: flex;
    flex-direction: row;
    transform: translateX(v-bind('overlayState.imageShiftX'));
    transition: transform 500ms;
  }
  .dots {
    position: absolute;
    bottom: 20px;
    left: 165px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #999;
    margin-right: 6px;
  }
  .dotLarge {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #666;
    margin-right: 6px;
  }
</style>