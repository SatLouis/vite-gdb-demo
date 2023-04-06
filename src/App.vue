<script setup>
import {reactive, watchEffect} from 'vue';
import Bar1 from './components/Bar1.vue';
import Bar2 from './components/Bar2.vue';
import {getGdp} from './apis';
const list = reactive([]);
getGdp().then((res) => {
  list.push(...res);
});
</script>

<template>
  <div class="container">
    <Bar1 :dataList="list" />
    <Bar2 :dataList="list" />
  </div>
  <div class="controls">
    <div v-for="item in list" :key="item.country" class="item">
      <label>{{ item.country }}</label>
      <input v-model="item.value" type="number" step="0.001" min="0" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
.controls {
  margin: 1em;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
.item {
  margin: 1em;
}
.item label {
  margin: 0 1em;
}
.item input {
  height: 26px;
  font-size: 14px;
}
h1 {
  text-align: center;
}
</style>
