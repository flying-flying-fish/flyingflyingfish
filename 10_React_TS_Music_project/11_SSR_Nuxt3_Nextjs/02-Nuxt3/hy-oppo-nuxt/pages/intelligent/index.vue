<template>
  <div class="intelligent">
    <div class="wrapper content">
      <swiper :banners="data?.data.banners"></swiper>
      <tab-category :categorys="data?.data.categorys"></tab-category>
      <template v-for="category in data?.data.categorys" :key="category.id">
        <section-category
          :category="category"
          v-if="category.productDetailss && category.productDetailss.length"
        ></section-category>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getHomeInfo } from "@/service/home";
const { data } = await getHomeInfo("intelligent");
</script>

<style lang="scss" scoped>
.intelligent {
}
</style>
