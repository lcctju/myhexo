module.exports = {
  theme: 'ououe',
  evergreen: true,
  themeConfig:{
    search: true,
    pageGroup: 5,
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Blog', link: '/posts/'},
      { text: 'About', link: '/about/'},
      { text: 'Category', link: '/category/'},
      { text: 'Tag', link: '/tag/'}
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
    ['@vuepress/google-analytics',{
      'ga': 'UA-144139750-1'
    }],
    ['mathjax', {
      target: 'svg',
      macros: {
        '*': '\\times'
      }
    }],
    // add vuepress-plugin-sitemap
    ['sitemap', {
      hostname: 'https://ccliu.netlify.com/',
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
