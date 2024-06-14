/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'SmartPage', // 英雄区文字
  STARTER_HERO_TITLE_2: 'SmartPage是一个创新性的网页项目，旨在为用户提供一种简单而强大的方式来创建静态网站。通过结合自然语言处理和图形学技术，NankoYo能够从用户提供的简单文本描述中生成复杂的网页布局和设计。这个项目的目标是让网站创建变得更加容易和直观，使任何人都能够在没有编程知识的情况下设计出令人印象深刻的网站。SmartPage将用户的创意转化为现实，为他们带来了全新的网页开发体验。', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:'', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: 'https://cdn.nankoyo.com/public/cache/star/images/hero/hero-image.png', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/signin',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/signup',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '特性', // 特性
  STARTER_FEATURE_TEXT_1: '主要特性', // 特性
  STARTER_FEATURE_TEXT_2:
    '利用自然语言处理和图形学技术，轻松创建个性化静态网站。', // 特性

  STARTER_FEATURE_1_TITLE_1: '自然语言处理技术', // 特性1
  STARTER_FEATURE_1_TEXT_1: '通过自然语言理解，将用户描述转化为网页设计。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://nankoyo.com/feature-1', // 特性1

  STARTER_FEATURE_2_TITLE_1: '图形学技术支持', // 特性2
  STARTER_FEATURE_2_TEXT_1: '利用先进的图形学技术创建精美的网页布局和设计。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://nankoyo.com/feature-2', // 特性2

  STARTER_FEATURE_3_TITLE_1: '简单易用的界面', // 特性3
  STARTER_FEATURE_3_TEXT_1: '提供直观简单的界面，使用户轻松创建网站，无需编程知识。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://nankoyo.com/feature-3', // 特性3

  STARTER_FEATURE_4_TITLE_1: '完全自定义的选项', // 特性4
  STARTER_FEATURE_4_TEXT_1: '允许用户根据需求定制和调整生成的网页，实现个性化设计。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://nankoyo.com/feature-4', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一套轻量实用的建站解决方案',
  STARTER_ABOUT_TEXT:
    'SmartPage是一款简单而强大的网页生成器，旨在让任何人都能轻松创建出令人印象深刻的网站，无需编程知识。<br /> <br />我们结合了自然语言处理和图形学技术，为用户提供了直观、灵活的网页设计体验。无论您是个人用户还是企业客户，NanKoYo都能满足您的需求，让网页设计变得简单、直观和创意。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: 'https://cdn.nankoyo.com/public/cache/star/images/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: 'https://cdn.nankoyo.com/public/cache/star/images/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '100,000＋',
  STARTER_ABOUT_TIPS_2: '终端客户',
  STARTER_ABOUT_TIPS_3: '正在使用我们的产品',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。',

  STARTER_PRICING_1_TITLE: '基础套餐',
  STARTER_PRICING_1_PRICE: '99',
  STARTER_PRICING_1_PRICE_CURRENCY: '¥',
  STARTER_PRICING_1_PRICE_PERIOD: '每年',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '适用于个人用户或小型团队,自然语言处理技术,基本图形学技术支持,简单易用的界面,1个自定义域名,基本技术支持', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://qm.qq.com/q/hawob9Eyw8',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '专业套餐',
  STARTER_PRICING_2_PRICE: '199',
  STARTER_PRICING_2_PRICE_CURRENCY: '¥',
  STARTER_PRICING_2_PRICE_PERIOD: '每年',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '适用于中小型企业或创业者,自然语言处理技术,全面的图形学技术支持,简单易用的界面,3个自定义域名,定制化选项,优先技术支持', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://qm.qq.com/q/hawob9Eyw8',

  STARTER_PRICING_3_TITLE: '企业套餐',
  STARTER_PRICING_3_PRICE: '499',
  STARTER_PRICING_3_PRICE_CURRENCY: '¥',
  STARTER_PRICING_3_PRICE_PERIOD: '每年',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '适用于大型企业或需要高级定制的用户,自然语言处理技术,全面的图形学技术支持,简单易用的界面,无限自定义域名,定制化选项,24/7优先技术支持,SLA服务水平协议', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://qm.qq.com/q/hawob9Eyw8',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '倾听您的声音，打造更好的明天',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'SmartPage确实是个神器，简单易用，帮我节省了大量时间！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-01.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Alice Wang',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '产品经理',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'SmartPage是我使用过的最简单、最有效的工具之一，极大地提升了我的工作效率！！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-02.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Michael Smith',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '网站管理员',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'SmartPage的稳定性和可靠性让我无需担心网站崩溃或数据丢失，十分放心！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-03.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Emily Johnson',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '网站开发者',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'SmartPage的团队服务态度非常好，对于我的疑问和需求都能及时回复和解决，让我感到非常满意和放心！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-04.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'David Brown',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '系统管理员',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'SmartPage的用户反馈展示功能帮助我更好地了解用户需求，为产品改进提供了宝贵意见！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-05.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Sarah Wilson',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '市场分析师',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '我对SmartPage的用户反馈展示功能赞不绝口，它让我能够更直观地了解用户的需求和意见，为产品改进提供了重要参考！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-06.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'John Lee',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '项目经理',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'SmartPage是什么？',
  STARTER_FAQ_1_ANSWER:
    'SmartPage是一个用于创建静态网站的工具，它可以将网站内容转换为纯HTML、CSS和JavaScript文件，以提高网站加载速度和安全性。',

  STARTER_FAQ_2_QUESTION: 'SmartPage与动态网站有何不同？',
  STARTER_FAQ_2_ANSWER:
    '与动态网站相比，SmartPage生成的网站不需要在每次请求时动态生成内容，而是在构建时就生成所有页面。这样可以减少服务器负载和提高网站性能。',

  STARTER_FAQ_3_QUESTION: 'SmartPage适用于哪些类型的网站？',
  STARTER_FAQ_3_ANSWER:
    'SmartPage适用于许多类型的网站，特别是对于内容不经常更新或不需要动态交互的网站，例如博客、文档站点和企业官方网站等。',

  STARTER_FAQ_4_QUESTION: 'SmartPage的优势有哪些？',
  STARTER_FAQ_4_ANSWER:
    'SmartPage具有诸多优势，包括更快的页面加载速度、更低的服务器成本、更好的安全性和更简单的部署过程。此外，它还能够更好地应对高流量和DDoS攻击等挑战。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    'NanKoYo开发者团队是一支充满激情和创造力的团队，致力于开发创新的静态网站生成器。他们专注于提供简单易用、高效可靠的工具，帮助用户快速构建高性能的静态网站。',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Emily Zhang',
      STARTER_TEAM_ITEM_DESCRIPTION: '数据分析师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Andrew Li',
      STARTER_TEAM_ITEM_DESCRIPTION: '网页设计师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jason Liu',
      STARTER_TEAM_ITEM_DESCRIPTION: '软件工程师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-04.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Sophia Chen',
      STARTER_TEAM_ITEM_DESCRIPTION: '用户体验设计师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-05.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Kevin Wang',
      STARTER_TEAM_ITEM_DESCRIPTION: '前端开发工程师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-06.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jessica Wu',
      STARTER_TEAM_ITEM_DESCRIPTION: '后端开发工程师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-07.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Brian Zhao',
      STARTER_TEAM_ITEM_DESCRIPTION: '移动应用设计师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-08.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Alice Wang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'UI/UX 设计师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-09.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Daniel Lee',
      STARTER_TEAM_ITEM_DESCRIPTION: '数据库管理员'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-10.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Angela Xu',
      STARTER_TEAM_ITEM_DESCRIPTION: '系统架构师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-11.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Steven Chen',
      STARTER_TEAM_ITEM_DESCRIPTION: '网络安全专家'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-12.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Cindy Zhou',
      STARTER_TEAM_ITEM_DESCRIPTION: '自然语言处理工程师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-13.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eric Huang',
      STARTER_TEAM_ITEM_DESCRIPTION: '人工智能工程师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-14.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Michelle Liu',
      STARTER_TEAM_ITEM_DESCRIPTION: '质量保证工程师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-15.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Tony Guo',
      STARTER_TEAM_ITEM_DESCRIPTION: '项目经理'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-16.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Grace Lin',
      STARTER_TEAM_ITEM_DESCRIPTION: '网站管理员'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-17.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Michael Zhang',
      STARTER_TEAM_ITEM_DESCRIPTION: '数据科学家'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-18.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jennifer Wang',
      STARTER_TEAM_ITEM_DESCRIPTION: '云计算工程师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-19.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Alex Wu',
      STARTER_TEAM_ITEM_DESCRIPTION: '前端设计师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-20.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Lucy Chen',
      STARTER_TEAM_ITEM_DESCRIPTION: '软件测试工程师'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 5, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于NanKoYo的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，天津',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@nankoyo.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/feedback-yjrioz', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'SmartPage是一个创新性的网页项目，旨在为用户提供一种简单而强大的方式来创建静态网站。通过结合自然语言处理和图形学技术，NankoYo能够从用户提供的简单文本描述中生成复杂的网页布局和设计。这个项目的目标是让网站创建变得更加容易和直观，使任何人都能够在没有编程知识的情况下设计出令人印象深刻的网站。SmartPage将用户的创意转化为现实，为他们带来了全新的网页开发体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://nankoyo.com/operating' },
        {
          TITLE: '帮助支持',
          URL: 'https://nankoyo.com/how-to-question'
        },
        {
          TITLE: 'Cookie 协议',
          URL: 'https://nankoyo.com/Cookie_Policy'
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '部署指南',
          URL: 'https://nankoyo.com/deploy-nankoyo-next'
        },
        {
          TITLE: '升级指南',
          URL: 'https://nankoyo.com/how-to-update-nankoyo'
        },
        { TITLE: '最新版本', URL: 'https://nankoyo.com/latest' }
      ]
    },
    {
      TITLE: '友情链接',
      LINK_GROUP: [
        {
          TITLE: 'Website status monitoring',
          URL: 'https://status.nankoyo.com/'
        },
        {
          TITLE: 'Programmer's Tools',
          URL: 'https://tools.nankoyo.com/'
        },
        {
          TITLE: 'South Cool Tour Music',
          URL: 'https://music.nankoyo.com/'
        },
        {
          TITLE: 'Music unlocking tool',
          URL: 'https://unlock.nankoyo.com/'
        },
        {
          TITLE: 'Open DNS server',
          URL: 'https://dns.nankoyo.com/'
        },
        {
          TITLE: 'Today's hot list',
          URL: 'https://hot.nankoyo.com/'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://nankoyo.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
