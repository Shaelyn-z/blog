const path = require('path');
module.exports = {
  base: './',
  title: '老张の部落格',
  description: 'Good good study ,day day up',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  alias: {
    'styles': path.resolve(__dirname, './styles')
  },
  themeConfig: {
    search: true,
    displayAllHeaders: true, // 显示所有页面的标题链接
    nav: [
      // { text: '首页', link: '/' },
      { text: '基本功', link: '/basics/frond.html' },
      { text: '错题本', link: '/bug/' },
      { text: '有点儿意思', link: '/fun/htmlcss.html' },
      { text: '碎碎念', link: '/talk/' },
      {
        text: '随笔',
        items: [
          {
            text: '读书笔记', items: [{ text: '实用类', link: '/essays/toolbook.html' },
            { text: '课外书', link: '/essays/book.html' }]
          },
          { text: '小句子', link: '/essays/sentence.html' }
        ]
      }

    ],
    sidebar: {
      '/basics/': getSidebar({
        title: '基本功', children: [
          'frond',
          'websecure'
        ]
      }),
      '/bug/': getSidebar({
        title: '错题本', children: [
          '',
          'tool'
        ]
      }),
      '/fun/': getSidebar({
        title: '有点儿意思', children: [
          'htmlcss',
          'navLink'
        ]
      }),
      '/talk/': getSidebar({
        title: '碎碎念', children: [
          '',
          'outsourcers'
        ]
      }),
      '/essays/': getSidebar({
        title: '随笔', children: [
          'toolbook',
          'book',
          'sentence'
        ],
        sidebarDepth: 1
      })
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }]
  ]
}

/**
 * 侧边栏设置
 * @param {*} title 侧边栏标题
 * @param {*} children 侧边栏子路径数组
 * @returns 
 */
function getSidebar({ title, children, sidebarDepth = 1 }) {
  return [
    {
      title,
      collapsable: false,
      sidebarDepth,
      children
    }
  ]
}