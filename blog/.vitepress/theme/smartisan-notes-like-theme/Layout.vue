<script setup>
import { useData } from './composables/data'
import SNHeader from './components/SNHeader/index.vue'
import SNSidebar from './components/SNSidebarNav/index.vue'
import SNContent from './components/SNContent/index.vue'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== false" class="layout__container">
    <SNHeader />
    <div class="body__container">
      <SNSidebar />
      <SNContent />
    </div>
  </div>
  <Content v-else/>
</template>

<style lang="less" scoped>
  @media (min-width: 768px) {
    .layout__container {
      position: relative;
      width: 100%;
      height: 100vh;
      z-index: var(--layout-zindex);

      .body__container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        width: 100%;
        height: calc(100% - var(--header-height));
        z-index: 1;
      }
    }
  }
</style>

<style lang="less" scoped>
  @media (max-width: 768px) {
    .layout__container {
      position: relative;
      width: 100%;
      height: 100vh;
      z-index: var(--layout-zindex);

      .body__container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        width: 100%;
        height: calc(100% - var(--header-height) * 2);
        z-index: 1;
      }
    }
  }
</style>