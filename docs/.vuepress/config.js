module.exports = {
  base: '/blog/',
  dest: '../../',
  title: '老张の部落格',
  description: 'Good good study ,day day up',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  themeConfig: {
    search: true,
    displayAllHeaders: true, // 显示所有页面的标题链接
    nav: [
      // { text: '首页', link: '/' },
      { text: '基本功', link: '/basics/frond.html' },
      { text: '错题本', link: '/bug/' },
      { text: '有趣的功能', link: '/fun/htmlcss.html' },
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
      '/basics/': getSidebar('基本功', [
        'frond'
      ]),
      '/bug/': getSidebar('错题本', [
        '',
        'tool'
      ]),
      '/fun/': getSidebar('有趣的功能', [
        'htmlcss'
      ]),
      '/talk/': getSidebar('碎碎念', [
        '',
        'outsourcers'
      ]),
      '/essays/': getSidebar('随笔', [
        'toolbook',
        'book',
        'sentence'
      ])
    }
  }
}

/**
 * 侧边栏设置
 * @param {*} title 侧边栏标题
 * @param {*} children 侧边栏子路径数组
 * @returns 
 */
function getSidebar(title, children) {
  return [
    {
      title,
      collapsable: false,
      sidebarDepth: 2,
      children
    }
  ]
}