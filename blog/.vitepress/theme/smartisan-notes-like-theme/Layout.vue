<script setup>
import { useData } from './composables/data'
import SNContent from './components/SNContent/index.vue'
import SNHeader from './components/SNHeader/index.vue'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== false" class="layout__container">
    <SNHeader />
    <SNContent />
  </div>
  <Content v-else/>
</template>

<style lang="less">
  .layout__container {
    width: 100%;
    min-height: 100vh;
  }
</style>