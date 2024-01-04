<script setup>
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
  <div class="content__container">
    <Content class="sn" :class="frontmatter.layout === '3d' ? 'content__container__3d' : 'content__container__wrapper'" />
  </div>
</template>

<style lang="less">
  .content__container {
    height: calc(100vh - var(--header-height));
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 9px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 9px;
      background: var(--text-3);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 9px;
    }
  }

  .content__container__wrapper {
    padding: 0 24px;
    background-color: var(--content-bg);
    background-image: url(./grid.jpg);
    background-repeat: repeat;
    background-position: left top;
    background-size: 100% var(--md-text-height-mobile);
  }

  @media (min-width: 768px) {
    .content__container__wrapper {
      padding: 0 36px;
      background-size: 100% var(--md-text-height);
    }
  }
</style>