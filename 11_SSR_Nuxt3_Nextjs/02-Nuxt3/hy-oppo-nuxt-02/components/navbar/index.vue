<template>
  <div class="navbar">
    <div class="wrapper content">
      <NuxtLink class="content-left" to="/">
        <img class="logo" src="@/assets/images/logo.png" alt="" />
        <h1 class="title">OPPO手机商城</h1>
      </NuxtLink>
      <ul class="content-center">
        <template v-for="(item, index) in navbars" :key="index">
          <li :class="{ active: currentIndex === index }">
            <NuxtLink
              class="link"
              :to="getPagePath(item)"
              @click="handleItemClick(index)"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </template>
        <!-- <li>
          <NuxtLink class="link" to="/"> OPPO专区 </NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/"> OnePlus专区 </NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/"> 智能硬件 </NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/"> 服务 </NuxtLink>
        </li> -->
      </ul>
      <search class="content-right"></search>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { INavbar } from "@/store/home";

export interface IProps {
  navbars: INavbar[];
}
const props = withDefaults(defineProps<IProps>(), {
  navbars: () => [],
});

const currentIndex = ref<number>(1);

const getPagePath = computed(() => {
  return (item: INavbar) => {
    let path = "/";
    if (item.type !== "oppo") {
      path += item.type; // type = onePlus
    }
    return path;
  };
});

function handleItemClick(index: number) {
  currentIndex.value = index;
}
</script>

<style lang="scss" scoped>
.navbar {
  height: $navBarHeight;
  z-index: 99;
  border-bottom-color: rgba(0, 0, 0, 0.06);
  border-bottom-style: solid;
  border-bottom-width: 1px;

  /* 吸顶 */
  @include elementSticky(36px);
  background-color: white;

  .content {
    height: 100%;
    /* @include border(); */
    @include normalFlex();
    justify-content: flex-start;
    align-items: center;

    .content-left {
      display: inline-block;
      width: $logoWidth;
      height: $logoHeight;
      .logo {
        height: 100%;
      }
      .title {
        text-indent: -1000px;
        height: 0;
        margin: 0;
      }
    }

    .content-center {
      @include normalFlex();
      width: 530px;
      margin-left: 60px;

      .link {
        font-size: 14px;
        color: #000;
        opacity: 0.55;
      }
      .link:hover {
        opacity: 1;
      }
      .active .link {
        opacity: 1;
      }
    }

    .content-right {
      margin-left: 50px;
    }
  }
}
</style>
