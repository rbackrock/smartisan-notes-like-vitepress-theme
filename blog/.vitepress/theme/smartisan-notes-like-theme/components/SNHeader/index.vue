<script setup>
import DynamicUnderline from '../DynamicUnderline/index.vue'
import IconAlignLeft from '../Icons/IconAlignLeft.vue'
import IconChevronRight from '../Icons/IconChevronRight.vue'
import IconChevronDown from '../Icons/IconChevronDown.vue'
import {
  sidebarStore,
  asideStore
} from '../../store'

function handleOpenMenu() {
  sidebarStore.toggleOpenMenu()
}

function handleOpenCatalog() {
  asideStore.toggleOpenDropdown()
}
</script>

<template>
  <header class="header">
    <div class="who__container">
      <div class="who__wrapper"><span>[rback@blog ~] # </span><DynamicUnderline /></div>
    </div>
    <div class="buttons">
      <div class="button__wrapper home">
        <div class="button__container"><span class="button">首页</span></div>
      </div>
      <div class="button__wrapper about">
        <div class="button__container"><span class="button">关于</span></div>
      </div>
    </div>
  </header>
  <div class="control">
    <div class="control__wrapper">
      <div class="p1">
        <div class="p1__wrapper button" @click="handleOpenMenu">
          <span><IconAlignLeft class="menu-icon" /></span><span>文章</span>
        </div>
      </div>
      <div class="p2">
        <div class="p2__wrapper button" @click="handleOpenCatalog">
          <span>目录</span>
          <span v-if="asideStore.isOpenDropdown === false"><IconChevronRight class="menu-icon" /></span>
          <span v-else><IconChevronDown class="menu-icon" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @media (min-width: 768px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--header-height);
      padding: 0 3vw;
      box-shadow: rgba(0,0,0,.15) 0 1px 8px;
      background: linear-gradient(#716661,#5f5450);

      .who__container {
        color: #fff;
        font-size: var(--header-title-fontsize);
        font-weight: 450;
      }

      .buttons {
        .button__wrapper {
          display: inline-block;

          &.home {
            padding: 0 0.9vw 0 0;
          }

          .button__container {
            padding: 1px;
            border-radius: 8px;
            line-height: var(--header-line-height);
            background: #cacaca;
            background: rgba(0, 0, 0, .2);
            font-size: var(--header-buttons-fontsize);
            cursor: pointer;

            .button {
              display: inline-block;
              vertical-align: top;
              padding: 0 16px;
              background: linear-gradient(#716661, #5f5450);
              color: #fff;
              box-shadow: 0 1px rgba(255,255,255,.1) inset;
              border-radius: 7px;

              &:hover {
                background: linear-gradient(#8e7968, #7e6c5e);
              }
            }
          }
        }
      }
    }

    .control {
      display: none;
    }
  }
</style>

<style lang="less" scoped>
  @media (max-width: 768px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--header-height-mobile);
      padding: 0 3vw;
      box-shadow: rgba(0,0,0,.15) 0 1px 8px;
      background: linear-gradient(#716661,#5f5450);

      .who__container {
        color: #fff;
        font-size: var(--header-title-fontsize-mobile);
        font-weight: 450;
      }

      .buttons {
        .button__wrapper {
          display: inline-block;

          &.home {
            padding: 0 0.9vw 0 0;
          }

          .button__container {
            padding: 1px;
            border-radius: 8px;
            line-height: var(--header-line-height-mobile);
            background: #cacaca;
            background: rgba(0, 0, 0, .2);
            font-size: var(--header-buttons-fontsize-mobile);
            cursor: pointer;

            .button {
              display: inline-block;
              vertical-align: top;
              padding: 0 16px;
              background: linear-gradient(#716661, #5f5450);
              color: #fff;
              box-shadow: 0 1px rgba(255,255,255,.1) inset;
              border-radius: 7px;

              &:hover {
                background: linear-gradient(#8e7968, #7e6c5e);
              }
            }
          }
        }
      }
    }

    .control {
      height: var(--header-height);
      background: linear-gradient(#5f5450,#716661);
      color: #fff;
      font-size: var(--header-buttons-fontsize-mobile);

      .control__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        padding: 0 3vw;
        height: 100%;

        .menu-icon {
          margin-right: 8px;
          width: 16px;
          height: 16px;
          fill: currentColor;
        }

        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
      }
    }
  }
</style>