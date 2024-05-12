<script setup lang="ts">
  import { useOverlayStore } from '@/stores/overlay';
  import { ref } from 'vue';
  const overlayState = useOverlayStore();
  const selectedTab = ref(0);
  const selectTab = (tab: number) => {
    selectedTab.value = tab;
  };
</script>

<template>
  <div class="descriptions">
    <div class="tabs">
      <div v-for="(descCollection, index) in overlayState.product?.descriptions" :key="index">
      <button class="tab highlighted" v-if="selectedTab === index"><b>{{descCollection.collectionHeader}}</b></button>
      <button class="tab" v-if="selectedTab !== index" @click="selectTab(index)"><b>{{descCollection.collectionHeader}}</b></button>
    </div>
  </div>
  <div v-for="desc in overlayState.product?.descriptions[selectedTab].descriptions" :key="desc.headLine">
    <h3>{{desc.headLine}}</h3>
    <div v-for="t in desc.texts" :key="t">
    <p class="description">{{t}}</p>
  </div>
  </div>
  </div>
</template>

<style scoped>
.descriptions {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background-color: #DDDDDD;
  padding: 24px;
}
.tabs {
  display: flex;
  flex-direction: row;

}
.tab {
  cursor: pointer;
  border-width: 0;
  background-color: unset;
  font-size: 14px;
  margin-right: 16px;
  padding: 0 0 8px 0;
}
.highlighted {
  border-bottom: 4px solid black;
}
h3 {
  font-size: 14px;
}
.description {
  font-size: 14px;
  margin: 6px 0;
}
</style>
