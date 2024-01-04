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
      background: var(--scrollbar-bg);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: var(--scrollbar-border-radius);
      background: var(--scrollbar-color);
    }
  }

  .content__container__wrapper {
    padding-top: 0;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: calc(3 * var(--md-text-height-mobile));
    background-color: var(--content-bg);
    background-image: url(./grid.jpg);
    background-repeat: repeat;
    background-position: left top;
    background-size: 100% var(--md-text-height-mobile);
  }

  @media (min-width: 768px) {
    .content__container__wrapper {
      padding-right: 36px;
      padding-left: 36px;
      padding-bottom: calc(3 * var(--md-text-height));
      background-size: 100% var(--md-text-height);
    }
  }
</style>