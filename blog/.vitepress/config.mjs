import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  srcDir: './posts',
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' }
    ]
  ]
})
