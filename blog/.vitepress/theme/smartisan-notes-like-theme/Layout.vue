<script setup>
import { provide, onMounted, ref, onBeforeUnmount } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { useData } from './composables/data'
import SNHeader from './components/SNHeader/index.vue'
import SNSidebar from './components/SNSidebarNav/index.vue'
import SNContent from './components/SNContent/index.vue'

const { frontmatter } = useData()
const device = ref('p')

function onIsDesktopEvent() {
  const is768 = useMediaQuery('(min-width: 768px)')
  device.value = is768.value ? 'p' : 'm'
}

onMounted(() => {
  window.addEventListener('resize', onIsDesktopEvent)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onIsDesktopEvent)
})

provide('device', device)
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
</style>