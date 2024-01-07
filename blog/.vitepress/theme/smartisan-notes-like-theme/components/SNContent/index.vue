<script setup>
import { inject } from 'vue'
import ContentAside from './components/Aside/index.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
const device = inject('device')
</script>

<template>
  <div :class="device" class="content__container">
    <div  class="content__container__wrapper">
      <Content class="sn" :class="frontmatter.layout === '3d' ? 'content__container__3d' : 'content__wrapper'" />
      <ContentAside />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .content__container.p {
    flex: 0 0 calc(100% - var(--sidebar-width));
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

    .content__container__wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      min-height: calc(100vh - var(--header-height));

      background-color: var(--content-bg);
      background-image: url(./grid.jpg);
      background-repeat: repeat;
      background-position: left top;
      background-size: 100% var(--md-text-height);

      .content__wrapper {
        min-height: calc(100vh - var(--header-height));
        flex: 1;
        padding-top: calc(1 * var(--md-text-height));
        padding-right: 18px;
        padding-left: 36px;
        padding-bottom: calc(3 * var(--md-text-height));

        background-image: url(./note_detail_edge.jpg);
        background-repeat: repeat-y;
        background-size: auto var(--md-text-height);
      }

      .aside__wrapper {
        flex: 0 0 390px;
      }
    }
  }
</style>

<style lang="less" scoped>
  .content__container.m {
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

    .content__container__wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      min-height: calc(100vh - var(--header-height));

      background-color: var(--content-bg);
      background-image: url(./grid.jpg);
      background-repeat: repeat;
      background-position: left top;
      background-size: 100% var(--md-text-height-mobile);

      .content__wrapper {
        min-height: calc(100vh - var(--header-height));
        flex: 1;
        padding-top: calc(1 * var(--md-text-height-mobile));
        padding-right: 18px;
        padding-left: 36px;
        padding-bottom: calc(3 * var(--md-text-height-mobile));

        background-image: url(./note_detail_edge.jpg);
        background-repeat: repeat-y;
        background-size: auto var(--md-text-height-mobile);
      }
    }
  }
</style>
