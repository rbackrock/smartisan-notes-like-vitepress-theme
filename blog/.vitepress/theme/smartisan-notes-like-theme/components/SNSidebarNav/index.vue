<script setup>
import {  computed } from 'vue'
import { sidebarStore } from '../../store'

const sidebarClassNames = computed(() => {
  const classNames = []
  if (sidebarStore.isOpenMenu) {
    classNames.push('open__menu')
  }

  return classNames
})

function handleClose() {
  sidebarStore.toggleOpenMenu()
}
</script>

<template>
  <div v-show="sidebarStore.isOpenMenu" class="mask" @click.self="handleClose" />
  <div
    :class="sidebarClassNames"
    class="sidebar__container"
    @click.self="handleClose"
  >
    <div class="sidebar__container__wrapper">
      <ul class="list">
        <li class="category">工具</li>
        <li class="item">
          <div class="item__wrapper">
            <div class="date">2024年1月4日</div>
            <div class="title">从上传谈起</div>
          </div>
        </li>
        <li class="item">
          <div class="item__wrapper">
            <div class="date">2024年1月4日</div>
            <div class="title">从上传谈起</div>
          </div>
        </li>
        <li class="item">
          <div class="item__wrapper">
            <div class="date">2024年1月4日</div>
            <div class="title">从上传谈起</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @media (min-width: 768px) {
    .mask {
      display: none;
    }

    .sidebar__container {
      flex: 0 0 var(--sidebar-width);
      position: relative;
      width: auto;
      height: 100%;
      z-index: var(--layout-mask-zindex);
      background: var(--backdrop-bg-color);
      touch-action: none;

      .sidebar__container__wrapper {
        width: 100%;
        height: 100%;
        background: var(--sidebar-bg);
        overflow-y: auto;
        border-right: 1px var(--sidebar-border-color) solid;
        touch-action: manipulation;

        &::-webkit-scrollbar {
          width: 9px;
          background: var(--scrollbar-bg);
        }

        &::-webkit-scrollbar-thumb {
          border-radius: var(--scrollbar-border-radius);
          background: var(--scrollbar-color);
        }

        .list {
          .category {
            height: calc(var(--md-text-height) * 2);
            line-height: calc(var(--md-text-height) * 2);
            border-bottom: 1px var(--sidebar-border-color) solid;
            text-align: center;
            font-size: 1.1em;
          }

          .item {
            box-shadow: 0 1px 4px rgba(0,0,0,.03) inset;

            &.active {
              background: var(--sidebar-item-active-bg);
            }

            &:hover {
              background: var(--sidebar-item-active-bg);
            }

            .item__wrapper {
              height: calc(var(--md-text-height) * 2);
              border-bottom: 1px var(--sidebar-border-color) solid;
              position: relative;
              padding: 0 0 0 20px;

              .date {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                height: 50%;
                color: var(--sidebar-date-text);
                font-size: 0.9em;
              }

              .title {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                height: 50%;
                position: relative;
                overflow: hidden;
                font-size: 1em;
                color: var(--sidebar-title-text);
                word-break: break-all;
                word-wrap: break-word;
                white-space: nowrap;
                text-overflow: ellipsis;
                cursor: default;
              }
            }
          }
        }
      }
    }
  }
</style>

<style lang="less" scoped>
  @media (max-width: 768px) {
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--backdrop-bg-color);
      z-index: var(--layout-mask-zindex);
    }

    .sidebar__container {
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      width: var(--sidebar-width-mobile);
      height: 100%;
      touch-action: none;
      transform: translate(calc(0vw - var(--sidebar-width-mobile)), 0);
      transition: opacity 0.25s, transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      z-index: var(--layout-sidebar-zindex);

      .sidebar__container__wrapper {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--sidebar-bg);
        overflow-y: auto;
        border-right: 1px var(--sidebar-border-color) solid;
        touch-action: manipulation;

        &::-webkit-scrollbar {
          width: 9px;
          background: var(--scrollbar-bg);
        }

        &::-webkit-scrollbar-thumb {
          border-radius: var(--scrollbar-border-radius);
          background: var(--scrollbar-color);
        }

        .list {
          .category {
            height: var(--md-text-height);
            line-height: var(--md-text-height);
            border-bottom: 1px var(--sidebar-border-color) solid;
            text-align: center;
          }

          .item {
            box-shadow: 0 1px 4px rgba(0,0,0,.03) inset;

            &.active {
              background: var(--sidebar-item-active-bg);
            }

            &:hover {
              background: var(--sidebar-item-active-bg);
            }

            .item__wrapper {
              height: var(--md-text-height);
              border-bottom: 1px var(--sidebar-border-color) solid;
              position: relative;
              padding: 0 0 0 20px;

              .date {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                height: 50%;
                color: var(--sidebar-date-text);
                font-size: 0.6em;
              }

              .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 50%;
                position: relative;
                overflow: hidden;
                font-size: 0.7em;
                color: var(--sidebar-title-text);
                word-break: break-all;
                word-wrap: break-word;
                white-space: nowrap;
                text-overflow: ellipsis;
                cursor: default;
              }
            }
          }
        }
      }

      &.open__menu {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
  }
</style>
