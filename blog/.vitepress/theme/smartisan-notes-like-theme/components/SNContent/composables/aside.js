import {
  ref
} from 'vue'
import {
  onContentUpdated
} from 'vitepress'

export function useHeading() {
  const hasHeading = ref(true)

  onContentUpdated(() => {
    const headingElList = document.querySelectorAll('.sn.content__block :where(h1, h2, h3, h4, h5, h6)')
    if (headingElList.length === 0) {
      hasHeading.value = false
    }
  })

  return {
    hasHeading
  }
}