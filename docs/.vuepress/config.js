module.exports = {
  title: '老张の部落格',
  description: 'Just playing around',
  themeConfig: {
    search: true,
    // displayAllHeaders: true, // 显示所有页面的标题链接
    nav: [
      // { text: '首页', link: '/' },
      { text: '基本功', link: '/basics/frond.html' },
      { text: '错题本', link: '/bug/跨域请求方式变为OPTIONS.html' },
    ],
    sidebar: [
      '/basics/frond.html',
      '/bug/'
      // ['/basics/frond.html', '原型']
    ]
  }
}