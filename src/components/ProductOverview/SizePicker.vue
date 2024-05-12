<script setup lang="ts">
  import type { Size } from '@/models/Size';
  import { useOverlayStore } from '@/stores/overlay';
  const overlayState = useOverlayStore();
  const changeSize = (size: Size) => { overlayState.selectSize(size) };
</script>

<template>
  <div class="sizePicker">
    <div class="sizeName">
    <p>Size: <b>{{overlayState.selectedSize}}</b></p>
    </div>
    <div class="sizeList">
      <div v-for="size in overlayState.product?.availableProducts.find(x=>x.color === overlayState.selectedColor)?.size" :key="size">
        <button class="sizeButton highlight" v-if="size === overlayState.selectedSize">{{ size }}</button>
        <button class="sizeButton" v-if="size !== overlayState.selectedSize" @click="changeSize(size)">{{ size }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sizePicker {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .sizeName {
    padding-top: 8px;
    display: flex;
    flex-direction: row;
    font-size: 12px;
  }
  .sizeList {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-bottom: 12px;
    
  }
  .sizeButton {
    width: 48px;
    height: 24px;
    border-radius: 20px;
    margin-right: 8px;
    cursor: pointer;
    border-width: 0;
  }
  .highlight {
    border: 1px solid black;
  }
</style>