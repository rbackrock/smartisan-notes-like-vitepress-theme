import {
  ref
} from 'vue'

export function useSidebar() {
  const isOpenMenu = ref(false)
  const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
  }

  return {
    isOpenMenu,
    toggleMenu
  }
}