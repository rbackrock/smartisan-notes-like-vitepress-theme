import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  srcDir: './posts',
  outDir: '../dist',
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  markdown: {
    lineNumbers: true,
    math: true
  },
  themeConfig: {
    sidebar: [
      {
        category: '这是分类',
        items: [
          {
            title: '这是标题',
            link: '/test'
          },
          {
            title: '这是标题1',
            link: '/test1'
          }
        ]
      }
    ]
  }
})
