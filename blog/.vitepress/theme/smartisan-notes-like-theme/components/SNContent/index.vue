<script setup>
import {
  onUnmounted
} from 'vue'
import {
  onContentUpdated
} from 'vitepress'
import {
  useIsDesktop
} from '../../composables/device'
import ContentAside from './components/Aside/index.vue'

const {
  isDesktop
} = useIsDesktop()
const lineHeightPc = 36
const lineHeightMobile = 33
const fixImgHandleFnList = []
const customBlockMutationObserverList = []

function setElementHeight(el, stepHeight) {
  if (el) {
    const elHeight = el.offsetHeight
    if (elHeight !== undefined && elHeight !== 0) {
      el.style.height = `${Math.ceil(elHeight / stepHeight + 0) * stepHeight}px`
    }
  }
}

function fixContentElementHeight() {
  const stepHeight = isDesktop.value ? lineHeightPc : lineHeightMobile

  /**
   * 代码块
   */
  const codeBlockListEl = document.querySelectorAll(`.sn.content__wrapper div[class*='language-']`)
  for (const codeBlockEl of codeBlockListEl) {
    setElementHeight(codeBlockEl, stepHeight)
  }

  /**
   * 表格
   */
  const tableListEl = document.querySelectorAll(`.sn.content__wrapper table`)
  for (const tableEl of tableListEl) {
    const tableHeight = tableEl.offsetHeight
    const theadHeight = tableEl.querySelector('thead').offsetHeight

    if (tableHeight !== undefined && tableHeight !== 0) {
      const calcHeight = Math.ceil(tableHeight / stepHeight + 0.001) * stepHeight
      tableEl.style.height = `${calcHeight}px`
      tableEl.querySelector('tbody').style.height = `${calcHeight - theadHeight - 1}px`
    }
  }

  /**
   * img 图片
   */
  const imgListEl = document.querySelectorAll(`.sn.content__wrapper img`)
  for (const imgEl of imgListEl) {
    const currentFixImgHeightFn = setElementHeight.bind(null, imgEl, stepHeight)
    fixImgHandleFnList.push({
      el: imgEl,
      handler: currentFixImgHeightFn
    })
    imgEl.addEventListener('load', currentFixImgHeightFn)
  }

  /**
   * custom-block
   */
  const customBlockListEl = document.querySelectorAll(`.sn.content__wrapper .custom-block`)
  for (const customBlockEl of customBlockListEl) {
    setElementHeight(customBlockEl, stepHeight)

    if (customBlockEl.classList.contains('details')) {
      const customBlockMutationObserver = new MutationObserver((mutationsList, observer) => {
        const [mutation] = mutationsList
        customBlockEl.style.height = `auto`
        setElementHeight(mutation.target, stepHeight)
      })
      customBlockMutationObserver.observe(customBlockEl, { attributeFilter: ['open'] })
      customBlockMutationObserverList.push(customBlockMutationObserver)
    }
  }
}

onContentUpdated(() => {
  window.addEventListener('resize', fixContentElementHeight)
  fixContentElementHeight()
})

onUnmounted(() => {
  window.removeEventListener('resize', fixContentElementHeight)

  for (const handleObject of fixImgHandleFnList) {
    handleObject.el.removeEventListener('load', handleObject.handler)
  }

  for (const customBlockMutationObserver of customBlockMutationObserverList) {
    customBlockMutationObserver.disconnect()
  }
})
</script>

<template>
  <div id="content__container__hook" class="content__container">
    <div  class="content__container__wrapper">
      <Content ref="el" class="sn content__wrapper" />
      <ContentAside />
    </div>
  </div>
</template>

<style lang="less" scoped>
  @media (min-width: 768px) {
    .content__container {
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
          padding-right: var(--content-wrapper-padding-right);
          padding-left: var(--content-wrapper-padding-left);
          padding-bottom: calc(3 * var(--md-text-height));

          background-image: url(./note_detail_edge.jpg);
          background-repeat: repeat-y;
          background-size: auto var(--md-text-height);
        }
      }
    }
  }
</style>

<style lang="less" scoped>
  @media (max-width: 768px) {
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

      .content__container__wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        min-height: calc(100vh - var(--header-height) * 2);

        background-color: var(--content-bg);
        background-image: url(./grid.jpg);
        background-repeat: repeat;
        background-position: left top;
        background-size: 100% var(--md-text-height-mobile);

        .content__wrapper {
          min-height: calc(100vh - var(--header-height) * 2);
          flex: 1;
          padding-top: calc(1 * var(--md-text-height-mobile));
          padding-right: var(--content-wrapper-padding-right-mobile);
          padding-left: var(--content-wrapper-padding-left-mobile);
          padding-bottom: calc(3 * var(--md-text-height-mobile));

          background-image: url(./note_detail_edge.jpg);
          background-repeat: repeat-y;
          background-size: auto var(--md-text-height-mobile);
        }
      }
    }
  }
</style>
