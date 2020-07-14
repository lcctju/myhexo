module.exports = {
  title: '智能技术',
  theme: 'ououe',
  evergreen: true,
  head: [
    ['meta', { name: 'baidu-site-verification', content: 'fP9EQkbGCM'}],
  ],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-footnote'))
    }
  },
  themeConfig:{
    search: true,
    pageGroup: 5,
    nav: [
      { text: '首页', link: '/'},
      { text: '博客', link: '/posts/'},
      { text: '关于', link: '/about/'},
      { text: '分类', link: '/category/'},
      { text: '标签', link: '/tag/'}
    ],
    footer:[{
      text: 'link',
      link: '/'
    }],
    cover: 'cover.jpg',
    //comment
    useVssue: false
  },
  plugins: [
    ['vuepress-plugin-baidu-autopush'],
    ['@vuepress/google-analytics',{
      'ga': 'UA-144139750-1'
    }],
    ['vuepress-plugin-google-adsense',{
      ad_client: 'ca-pub-1977396037355374'
    }],
    ['mathjax', {
      target: 'svg',
      macros: {
        '*': '\\times'
      }
    }],
    // add vuepress-plugin-sitemap
    ['sitemap', {
      hostname: 'https://myblog.tjubd.cn/',
      changefreq: 'weekly'
    }],
    // add vuepress-plugin-reading-progress
    ['reading-progress', {
      readingDir: ['posts']
    }],
    ['blog-multidir', {
      postsDir: {posts: '/:year/:month/:day/:slug'}
    }]
  ],
  postcss: {
    plugins: [
      require('postcss-propro'),
      require('postcss-flex-alias'),
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  }
}
