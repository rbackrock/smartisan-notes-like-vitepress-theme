import { reactive } from 'vue'

export const sidebarStore = reactive({
  isOpenMenu: false,
  toggleOpenMenu() {
    this.isOpenMenu = !this.isOpenMenu
  }
})