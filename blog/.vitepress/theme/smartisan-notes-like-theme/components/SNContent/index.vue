<script setup>
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
  <div class="content__container">
    <div class="content__container__wrapper">
      <Content class="sn" :class="frontmatter.layout === '3d' ? 'content__container__3d' : 'content__wrapper'" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .content__container {
    flex: 1;
    height: 100%;
    overflow-y: auto;

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
    background-color: var(--content-bg);
    background-image: url(./grid.jpg);
    background-repeat: repeat;
    background-position: left top;
    background-size: 100% var(--md-text-height-mobile);
  }

  .content__wrapper {
    padding-top: calc(1 * var(--md-text-height-mobile));;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: calc(3 * var(--md-text-height-mobile));

    background-image: url(./note_detail_edge.jpg);
    background-repeat: repeat-y;
    background-size: auto var(--md-text-height-mobile);
  }

  @media (min-width: 768px) {
    .content__container {
      flex: 0 0 calc(100% - var(--sidebar-width));
    }

    .content__container__wrapper {
      background-size: 100% var(--md-text-height);
    }

    .content__wrapper {
      padding-top: calc(1 * var(--md-text-height));
      padding-right: 36px;
      padding-left: 36px;
      padding-bottom: calc(3 * var(--md-text-height));
      background-size: auto var(--md-text-height);
    }
  }
</style>