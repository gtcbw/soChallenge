<script setup lang="ts">
  import { useOverlayStore } from '@/stores/overlay';
  import Gallery from './Gallery.vue';
  import Description from './Description.vue';
  import Configuration from './Configuration.vue';
  import AddToCartButton from './AddToCartButton.vue';
  const overlayState = useOverlayStore();
</script>

<template>
  <div class="productOverview">
   <div class="scrollArea">
    <div class="top">
      <Gallery />
      <Configuration />
    </div>
    <Description />
   </div>
   <div class="fixFooter">
    <label>{{overlayState.product?.name}}</label>
    <AddToCartButton />
   </div>
  </div>
</template>

<style scoped>
.productOverview {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: fit-content;
  padding-top: 48px;
}
.scrollArea {
  display: flex;
  flex-direction: column;
  max-height: calc(100vH - 110px);
  overflow-y: scroll;
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}
.top {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.scrollArea::-webkit-scrollbar {
  display: none;
}
.fixFooter {
  display: flex;
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -3px 6px #999;
}
@media (min-width: 576px) {
  .top {
    flex-direction: row;
    align-items: unset;
  }
  .scrollArea {
    max-height: calc(100vH - 176px);
  }
}
@media (min-width: 768px) {
  .productOverview {
    width: 700px;
  }
}
</style>
