<template>
  <div class="app" style="border: 1px solid green; margin: 10px">
    <h2>Home</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useHomeStore } from "../store/home";
let homeStore = useHomeStore();
let { count } = storeToRefs(homeStore);
function addCounter() {
  count.value++;
}
</script>
