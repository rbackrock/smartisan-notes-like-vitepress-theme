import {
  nextTick,
  watch,
  ref,
  onUnmounted
} from 'vue'
import {
  onContentUpdated
} from 'vitepress'
import {
  useIsDesktop
} from '../../../composables/device'

export function useHeading() {
  const {
    isDesktop
  } = useIsDesktop()
  const hasHeading = ref(false)

  function setAsidePosition() {
    if (isDesktop.value) {
      const {
        right
      } = document.querySelector('.sn.content__block').getBoundingClientRect()
      const asideLeft = right - 300 + 20
      document.querySelector('.aside__wrapper').style.left = `${asideLeft}px`
    }
  }

  onContentUpdated(() => {
    hasHeading.value = document.querySelectorAll('.layout__container.doc :where(h1, h2, h3, h4, h5, h6)').length > 0
    window.addEventListener('resize', setAsidePosition)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', setAsidePosition)
  })

  watch(hasHeading, async currentValue => {
    if (currentValue === true) {
      await nextTick()
      setAsidePosition()
    }
  })

  return {
    hasHeading
  }
}