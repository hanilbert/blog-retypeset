import type { ThemeConfig } from '@/types'

export const themeConfig: ThemeConfig = {
  // 站点信息 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 开始
  site: {
    // 站点标题
    title: '流觞',
    // 站点副标题
    subtitle: 'Revive the beauty of typography',
    // 站点描述
    description: 'Retypeset is a static blog theme based on the Astro framework. Inspired by Typography, Retypeset establishes a new visual standard and reimagines the layout of all pages, creating a reading experience reminiscent of paper books, reviving the beauty of typography. Details in every sight, elegance in every space.',
    // 使用 src/i18n/ui.ts 中的多语言标题/副标题/站点描述，而不是上方静态配置
    i18nTitle: true, // true, false
    // 作者名称
    author: '千流水流',
    // 站点地址
    url: 'https://xttishta.com',
    // 站点图标
    // 推荐格式: svg, png 或 ico
    favicon: '/icons/favicon.svg', // 或 https://example.com/favicon.svg
  },
  // 站点信息 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 结束

  // 颜色设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 开始
  color: {
    // 默认主题模式
    mode: 'light', // light, dark, auto
    light: {
      // 主要颜色
      // 用于标题、悬停效果等
      // oklch 颜色选择器: https://oklch.com/
      primary: 'oklch(25% 0.005 298)',
      // 次要颜色
      // 用于文章文本
      secondary: 'oklch(40% 0.005 298)',
      // 背景颜色
      background: 'oklch(96% 0.005 298)',
    },
    dark: {
      // 主要颜色
      primary: 'oklch(92% 0.005 298)',
      // 次要颜色
      secondary: 'oklch(77% 0.005 298)',
      // 背景颜色
      background: 'oklch(22% 0.005 298)',
    },
  },
  // 颜色设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 结束

  // 全局设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 开始
  global: {
    // 默认语言
    locale: 'zh', // de, en, es, fr, ja, ko, pl, pt, ru, zh, zh-tw
    // 更多语言
    // 不要重复填写默认语言，可以为空数组 []
    moreLocales: ['en', 'ja', 'zh-tw'], // ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh', 'zh-tw']
    // 文章文本字体样式
    fontStyle: 'sans', // sans, serif
    // 文章日期格式
    dateFormat: 'YYYY-MM-DD', // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    // 默认开启所有文章的目录
    toc: true, // true, false
    // 启用 KaTeX 数学公式渲染
    katex: true, // true, false
    // 减少动画和过渡效果以提高性能
    reduceMotion: false, // true, false
  },
  // 全局设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 结束

  // 评论设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 开始
  comment: {
    // 启用评论系统
    enabled: false, // true, false
    // waline 评论系统
    // https://waline.js.org/en/
    waline: {
      // 服务器地址
      serverURL: '',
      // emoji 表情地址
      emoji: [],
      // gif 搜索
      search: false, // true, false
      // 图片上传
      imageUploader: false, // true, false
    },
  },
  // 评论设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 结束

  // SEO 设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 开始
  seo: {
    // @twitter ID
    twitterID: '@xxxxxx',
    // 站点验证
    verification: {
      // google 搜索控制台
      // https://search.google.com/search-console
      google: 'xxxxxx',
      // bing 网站管理员工具
      // https://www.bing.com/webmasters
      bing: 'xxxxxx',
      // yandex 网站管理员
      // https://webmaster.yandex.com
      yandex: 'xxxxxx',
      // 百度搜索
      // https://ziyuan.baidu.com
      baidu: 'xxxxxx',
    },
    // google 分析
    // https://analytics.google.com
    googleAnalyticsID: 'xxxxxx',
    // umami 分析
    // https://cloud.umami.is
    umamiAnalyticsID: 'xxxxxx',
    // follow 验证
    // https://follow.is/
    follow: {
      // 订阅 ID
      feedID: 'xxxxxx',
      // 用户 ID
      userID: 'xxxxxx',
    },
    // apiflash 访问密钥
    // 自动生成网站截图用于 open graph 图片
    // 获取访问密钥: https://apiflash.com/
    apiflashKey: 'xxxxxx',
  },
  // SEO 设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 结束

  // 页脚设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 开始
  footer: {
    // 社交链接
    links: [
      {
        name: 'RSS',
        url: '/atom.xml', // 或 /rss.xml
      },
      {
        name: 'GitHub',
        url: 'https://github.com/hanilbert',
      },
      {
        name: 'Email',
        url: 'blog@xttishta.com',
      },
      // {
      //   name: 'X',
      //   url: 'https://x.com/radishzz_',
      // },
    ],
    // 建站年份
    startYear: 2025,
  },
  // 页脚设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 结束

  // 预加载设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 开始
  preload: {
    // 链接预加载
    // 文档: https://docs.astro.build/en/guides/prefetch/#prefetch-strategies
    linkPrefetch: 'viewport', // hover, tap, viewport, load
    // 图片托管地址
    // 优化 Markdown 文件中的远程图片以避免布局抖动
    imageHostURL: '',
    // 自定义 google analytics js
    // 适用于将分析脚本路由到自定义域名的用户
    // 参见 https://gist.github.com/xiaopc/0602f06ca465d76bd9efd3dda9393738
    customGoogleAnalyticsJS: '',
    // 自定义 umami analytics js
    // 适用于自部署 umami 或将分析脚本路由到自定义域名的用户
    // 参见 https://github.com/umami-software/umami/discussions/1026
    customUmamiAnalyticsJS: '',
  },
  // 预加载设置 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 结束
}

export default themeConfig

export const defaultLocale = themeConfig.global.locale
export const moreLocales = themeConfig.global.moreLocales
export const allLocales = [defaultLocale, ...moreLocales]
