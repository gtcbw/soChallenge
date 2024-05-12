<script setup lang="ts">
  import { useOverlayStore } from '@/stores/overlay';
  const overlayState = useOverlayStore();
  const hideOverlay = () => { overlayState.hideOverlay(); };
</script>

<template>
  <div class="overlay">
    <div class="close" @click="hideOverlay">+</div>
    <slot></slot>
  </div>
  <div class="background" @click="hideOverlay" />
</template>

<style scoped>
.background {
  background-color: rgba(0,0,0,0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.overlay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  z-index: 2;
}

.close {
  font-size: 28px;
  position: absolute;
  right: 2px;
  top: 10px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  z-index: 3;
  transform: rotateZ(45deg);
}

@media (min-width: 576px) {
  .overlay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.overlay {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: fit-content;
  width: fit-content;
  max-height: calc(100vH - 60px);
}
}
</style>
