<script setup lang="ts">
  import { useOverlayStore } from '@/stores/overlay';
  import ColorPicker from './ColorPicker.vue';
  import SizePicker from './SizePicker.vue';
  const overlayState = useOverlayStore();
</script>

<template>
  <div class="configuration">
    <label class="new"><b>Brand New</b></label>
    <label>{{ overlayState.product?.name }}</label>
    <div class="price">
      <p><b>{{ overlayState.product?.priceEuro.toPrecision(4) }} EUR</b></p>
      <img src="https://www.soliver.de/_nuxt/img/logo.c514aa2.svg" class="logo" />
    </div>
    <div class="separator" />
    <ColorPicker />
    <div class="separator" />
    <SizePicker />
  </div>
</template>

<style scoped>
.configuration {
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.new {
  font-size: 12px;
  margin-bottom: 8px;
}
.price {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 60px;
  height: 30px;
}
.separator {
  border-bottom: 1px solid #CCCCCC;
}

@media (min-width: 576px) {
  .configuration {
    width: calc(100% - 388px);
  }
}
</style>
