<script setup lang="ts">
  import type { Color } from '@/models/Color';
import { useOverlayStore } from '@/stores/overlay';
  const overlayState = useOverlayStore();
  const changeColor = (color: Color) => { overlayState.selectColor(color) };
</script>

<template>
  <div class="colorPicker">
    <div class="colorName">
    <p>Color: <b>{{overlayState.selectedColor}}</b></p>
  </div>
  <div class="previewList">
    <button v-for="item in overlayState.product?.availableProducts" :key="item.color"  @click="changeColor(item.color)">
      <img v-if="item.color === overlayState.selectedColor" :src="item.colorPreview" class="colorPreview colorPreviewHighlight"/>
      <img v-if="item.color !== overlayState.selectedColor" :src="item.colorPreview" class="colorPreview"/>
    </button>
  </div>
  </div>
</template>

<style scoped>
  .colorPicker {
    display: flex;
    flex-direction: column;
  }
  .colorName {
    padding-top: 8px;
    display: flex;
    flex-direction: row;
    font-size: 12px;
  }
  .previewList {
    display: flex;
    flex-direction: row;
    padding-bottom: 12px;
    
  }
  button {
    background-color: unset;
    border: unset;
    padding: unset;
    margin: unset;
  }
  .colorPreview {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 8px;
    cursor: pointer;
  }
  .colorPreviewHighlight {
    border: 1px solid black;
  }
</style>