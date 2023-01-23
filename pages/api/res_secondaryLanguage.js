const secondaryLangData = {
  page_info: {
    bio_header: "中文",
    bio: "👋 您好，我是Sean Redmon。一位热情开朗自学成才的数字设计开发师。我曾在中国为学生编写制作智能白板游戏，后来专职从事网站制作和APP的开发。我现在居住在安大略省的伦敦。 ",
    section_names: {
      about: "关于我",
      projects: "项目",
      skills: "技能",
      experience: "经验",
    },
  },
  projects: [
    {
      title: "Donnie Fan 喜剧",
      startDate: "2021-2023",
      description:
        "北京喜剧演员 Donnie Fan 的网站。随着时间的推移，该站点与 Donnie 一起成长和发展。他最初是一名业余爱好喜剧演员，在当地的外国人聚会场所表演，现在与大牌人物一起巡回演出，例如 Joe Wong(曾为乔·拜登总统表演过)。该网站已被用于售票、宣传唐尼的戏剧、每周表演和流媒体平台特价。 Donniefan.com 帮助 Donnie 启动了他的北美巡演。这个网站非常宝贵，可以将他介绍给在中国以外可能不认识他的俱乐部和场所。目前，该站点在搜索字词 Donnie Fan 中排名第一。技术人员可以查看 Github 文档了解更多详细信息。",
      preview: "images/portfolio/donnie-fan/preview-donnie-fan2.webm",
      images: [
        "images/portfolio/donnie-fan/desktop-hero-donnie-fan.webp",
        "images/portfolio/donnie-fan/desktop-medea-donnie-fan.webp",
        "images/portfolio/donnie-fan/desktop-showtime-donnie-fan.webp",
        "images/portfolio/donnie-fan/donnie-fan-medea.webp",
      ],
      url: "https://github.com/seanred360/donnie-fan-website",
      liveSiteUrl: "https://donniefan.com/",
      technologies: [
        {
          class: "akar-icons:nextjs-fill",
          name: "NextJs",
        },
        {
          class: "simple-icons:react",
          name: "React",
        },
        {
          class: "cib:sass-alt",
          name: "Sass",
        },
        {
          class: "cib:js",
          name: "Javascript",
        },
        {
          class: "bxl:figma",
          name: "Figma",
        },
      ],
    },
    {
      title: "迈克比萨",
      startDate: "2023",
      description:
        "迈克制作披萨已有 20 多年了。他是守旧派，喜欢让事情简单化。他以前的站点太忙，太难更改。目标很简单，让更多人打电话订购披萨！我将他的简约品牌转化为一个现代网站，该网站具有当地老派比萨店的氛围，同时仍然感觉像一个现代网络应用程序。 Mike 以前的网站很难更改，他总是不得不浪费时间打电话给开发人员进行定价更改和其他小改动。我为他构建了一个简约的 CMS，他可以在几分钟内进行更改。",
      preview: "images/portfolio/mikeys-pizzeria/preview-mikeys-pizzeria.webm",
      images: [
        "images/portfolio/mikeys-pizzeria/desktop-hero-mikeys-pizzeria.webp",
        "images/portfolio/mikeys-pizzeria/mockup-mobile-mikeys-pizzeria.webp",
        "images/portfolio/mikeys-pizzeria/desktop-pizza-mikeys-pizzeria.webp",
        "images/portfolio/mikeys-pizzeria/desktop-testimonials-mikeys-pizzeria.webp",
      ],
      url: "https://github.com/seanred360/mikeys-pizzeria",
      liveSiteUrl: "https://mikeyspizzeria.netlify.app/",
      technologies: [
        {
          class: "akar-icons:nextjs-fill",
          name: "Next.js",
        },
        {
          class: "teenyicons:tailwind-solid",
          name: "TailwindCSS",
        },
        {
          class: "logos:sanity",
          name: "Sanity CMS",
        },
        {
          class: "lucide:framer",
          name: "Framer Motion",
        },
        {
          class: "simple-icons:matterdotjs",
          name: "Matter.js",
        },
      ],
    },
    {
      title: "Kei Gambit演员",
      startDate: "2022",
      description:
        "为英国配音演员 Kei Gambit 定制的 WordPress 主题。 Kei 需要一个地方向潜在的雇主和客户展示他的各种创意作品。在我们的探索电话之后，我了解到 Kei 是一个不会把自己太当回事的有趣的人。他为数百部卡通配音，并拥有自己的漫画系列。我选择粉红色作为主色，因为它非常适合他的个性（而且他穿那件粉红色西装外套看起来很棒）。该网站大胆的轮廓风格让人联想到漫画风格。 Kei 利用这个网站扩大了他在中国以外的观众群，并在加拿大和美国开展了演出。",
      preview: "images/portfolio/kei-gambit/preview-kei-gambit.webm",
      images: [
        "images/portfolio/kei-gambit/mockup-all-white.webp",
        "images/portfolio/kei-gambit/kei-gambit-books.webp",
        "images/portfolio/kei-gambit/kei-gambit-filmography.webp",
        "images/portfolio/kei-gambit/kei-gambit-categories.webp",
      ],
      url: "https://github.com/seanred360/keis-weird-and-wonderful-theme",
      liveSiteUrl: "https://keigambit.com",
      technologies: [
        {
          class: "simple-icons:react",
          name: "React",
        },
        {
          class: "bxl:firebase",
          name: "Firebase",
        },
        {
          class: "teenyicons:tailwind-solid",
          name: "TailwindCSS",
        },
        {
          class: "tabler:brand-redux",
          name: "Redux",
        },
      ],
    },
    {
      title: "Audiophile 外设",
      startDate: "2023",
      description:
        "便携式音频设备的电子商务网站。我负责所有前端工作，包括将设计转化为代码、创建内容管理系统以及设置 Stripe 结帐。就在这里，我会谈论我增加了多少转化率并推动了业务的销售。不幸的是，发烧友完全是设计师编造的。像这样为您制作一个高转化率的网站或应用程序将是我的荣幸。",
      preview: "images/portfolio/audiophile/preview-audiophile2.webm",
      images: [
        "images/portfolio/audiophile/audiophile-mockup-desktop.webp",
        "images/portfolio/audiophile/audiophile-checkout.webp",
        "images/portfolio/audiophile/audiophile-mockup-mobile.webp",
        "images/portfolio/audiophile/audiophile-headphones.webp",
        "images/portfolio/audiophile/audiophile-mockup-tablet.webp",
      ],
      url: "https://github.com/seanred360/audiophile-fullstack-ecommerce-site",
      liveSiteUrl: "https://audiophilestore.netlify.app/",
      technologies: [
        {
          class: "simple-icons:react",
          name: "React",
        },
        {
          class: "bxl:firebase",
          name: "Firebase",
        },
        {
          class: "teenyicons:tailwind-solid",
          name: "TailwindCSS",
        },
        {
          class: "tabler:brand-redux",
          name: "Redux",
        },
      ],
    },
    {
      title: "英语作为第二语言白板游戏",
      startDate: "2017-2020",
      description:
        "这是我在中国 ESL 课堂上为智能板创建的所有游戏的汇编。这些游戏最初是独立游戏。每个游戏都是为了与课程一起使用而创建的。其中大部分是为了帮助学生记忆词汇。 UI分为Kid's Beginner A book和B book，然后按units 1-16。每个游戏都从同一个全局单词列表中提取。每个单元都有对应于书籍的单词表和语音单词表。拥有 Android 应用程序的学生可以触摸这些单词并听到它朗读给他们听。这比使用书籍随附的 CD 更容易在家练习单词。这样学生可以在没有父母帮助的情况下练习。中国的教育系统主要集中在记忆大量信息然后将其重复回来。这个应用程序简化了课堂内外的这一过程。要使用该应用程序，只需选择一个单位，然后按左上角的菜单按钮。您将看到该单元的游戏列表，以及在不同单词列表之间进行选择的选项。您可以选择拼音词、词汇词或两者兼而有之。在右上角，您可以全局关闭所有游戏的背景音乐。您可以使用重新启动按钮重新启动当前游戏。打开此菜单将始终暂停当前游戏。",
      preview:
        "images/portfolio/esl-games-collection/preview-esl-games-collection.webm",
      images: [
        "images/portfolio/esl-games-collection/preview-banana-race.png",
        "images/portfolio/esl-games-collection/preview-board-game.png",
        "images/portfolio/esl-games-collection/preview-board-game2.png",
        "images/portfolio/esl-games-collection/preview-bobomb.png",
        "images/portfolio/esl-games-collection/preview-find-the-object.png",
        "images/portfolio/esl-games-collection/preview-go-fishing.png",
        "images/portfolio/esl-games-collection/preview-gum-monster.png",
        "images/portfolio/esl-games-collection/preview-gum-monster2.png",
        "images/portfolio/esl-games-collection/preview-hidden-shapes.png",
        "images/portfolio/esl-games-collection/preview-gum-monster.png",
        "images/portfolio/esl-games-collection/preview-gum-monster2.png",
        "images/portfolio/esl-games-collection/preview-hidden-shapes.png",
        "images/portfolio/esl-games-collection/preview-mario-box-roulette.png",
        "images/portfolio/esl-games-collection/preview-mario-box-roulette2.png",
        "images/portfolio/esl-games-collection/preview-matching-game.png",
        "images/portfolio/esl-games-collection/preview-memory-stomper.png",
        "images/portfolio/esl-games-collection/preview-memory-stomper2.png",
        "images/portfolio/esl-games-collection/preview-memory.png",
        "images/portfolio/esl-games-collection/preview-poop-game.png",
        "images/portfolio/esl-games-collection/preview-scrambled-image.png",
        "images/portfolio/esl-games-collection/preview-scrambled-words.png",
      ],
      url: "https://github.com/seanred360/ESL-Game-Collection",
      liveSiteUrl: "https://seanred.itch.io/esl-games-collection",
      technologies: [
        {
          class: "bxl:unity",
          name: "Unity",
        },
        {
          class: "teenyicons:c-sharp-solid",
          name: "C#",
        },
        {
          class: "ep:data-board",
          name: "SMART Board",
        },
      ],
    },
    {
      title: "国际少儿英语 A",
      startDate: "2020",
      description:
        "我创建这个应用程序是为了解决我们英语学校的一个问题。学生们没有办法在家里自己练习或阅读他们的书。他们必须让父母帮助他们阅读或帮助他们播放随书附送的 CD。父母非常细心的学生与其他学生相比具有巨大的不公平优势。所以我创建了一个 android 应用程序，学生可以在没有父母帮助的情况下在家中使用。学生可以浏览本书并单击音乐图标来收听 CD 音频播放。教师也可以在课堂上从这个应用程序中受益。这个应用程序也可以在教室的智能板上运行。教师不再需要制作书页的幻灯片，也不必浪费课堂时间试图在 CD 上找到正确的音频文件。在快节奏的 ESL 课堂中，你会因为摸索 CD 播放器而很快失去课堂的活力。该应用程序具有触摸控制。您可以放大和平移屏幕。您也可以滑动翻页。",
      preview: "images/portfolio/kids-beginner-book/preview-kba.webm",
      images: [
        "images/portfolio/kids-beginner-book/preview-kba.png",
        "images/portfolio/kids-beginner-book/kba-audio.png",
        "images/portfolio/kids-beginner-book/preview-kba-page-turn.png",
      ],
      url: "https://github.com/seanred360/Kid-s-Beginner-Book",
      liveSiteUrl: "https://seanred.itch.io/kba",
      technologies: [
        {
          class: "bxl:unity",
          name: "Unity",
        },
        {
          class: "teenyicons:c-sharp-solid",
          name: "C#",
        },
        {
          class: "ant-design:android-filled",
          name: "Android APK",
        },
        {
          class: "ep:data-board",
          name: "SMART Board",
        },
      ],
    },
    {
      title: "全栈应用反馈留言板",
      startDate: "2022",
      description:
        "我迄今为止最雄心勃勃的项目。我什至不能把我从创建这个应用程序中学到的所有东西都放在这里。使用 MERN 堆栈创建。 *用户可以创建、投票、编辑和删除帖子。 *发表评论并回复评论。 *创建一个帐户，登录/退出，重置他们的密码并更改他们的帐户信息。帖子数据都存储在我托管的 Mongo 数据库中。用户配置文件存储在 Firebase 上。",
      preview: "images/portfolio/feedback-app/preview-feedback-app2.webm",
      images: [
        "images/portfolio/feedback-app/feedback-app-mockup.webp",
        "images/portfolio/feedback-app/feedback-app-home.webp",
        "images/portfolio/feedback-app/feedback-app-login.webp",
        "images/portfolio/feedback-app/feedback-app-account.webp",
        "images/portfolio/feedback-app/feedback-app-post.webp",
        "images/portfolio/feedback-app/feedback-app-roadmap.webp",
      ],
      url: "https://github.com/seanred360/product-feedback-app",
      liveSiteUrl: "https://seanredfeedback.netlify.app/",
      technologies: [
        {
          class: "bxl:mongodb",
          name: "MongoDB",
        },
        {
          class: "simple-icons:express",
          name: "Express",
        },
        {
          class: "simple-icons:react",
          name: "React",
        },
        {
          class: "akar-icons:node-fill",
          name: "Nodejs",
        },
        {
          class: "bxl:figma",
          name: "Figma",
        },
        {
          class: "bxl:firebase",
          name: "Firebase",
        },
      ],
    },
    {
      title: "Clamr 消息应用程序",
      startDate: "2022",
      description:
        "全栈 Discord 克隆。我的目标是学习 TailwindCSS、Redux 和 Firebase。该应用程序处于粗糙状态并且没有响应。目前用户可以登录、添加朋友、与朋友一起加入聊天室以及添加消息到反应。使用 Firestore 数据库在客户端之间实时更新数据。我已暂停开发以了解有关如何有效设计数据库的更多信息。如果我回过头来，我会用批量查询来简化代码。",
      preview: "images/portfolio/clamr/preview-clamr.webm",
      images: [
        "images/portfolio/clamr/clamr-emojis.webp",
        "images/portfolio/clamr/clamr-login.webp",
        "images/portfolio/clamr/clamr-dash.webp",
      ],
      url: "https://github.com/seanred360/clamr-chat-app",
      liveSiteUrl: "https://clamr.netlify.app/",
      technologies: [
        {
          class: "simple-icons:react",
          name: "React",
        },
        {
          class: "bxl:firebase",
          name: "Firebase",
        },
        {
          class: "teenyicons:tailwind-solid",
          name: "TailwindCSS",
        },
        {
          class: "tabler:brand-redux",
          name: "Redux",
        },
      ],
    },
    {
      title: "行星事实网站",
      startDate: "2021",
      description:
        "我只用了一个 Figma 设计文件来完成了 Frontend Mentor 挑战。运用AnimeJS 创建栩栩如生的动画使我的作品在众多作品中脱颖而出。我想挑战自己，掌握更全面的知识，所以我在没有借助任何 Javascript 库的情况下得到了这个成绩。请单击上面的 Github 图标，可以查看带有图片和示例的详细代码细分。",
      preview:
        "images/portfolio/planets-fact-site/preview-planets-fact-site.webm",
      images: [
        "images/portfolio/planets-fact-site/planets-fact-site-mockup.webp",
        "images/portfolio/planets-fact-site/planets-fact-site-internal.png",
        "images/portfolio/planets-fact-site/planets-fact-site-geology.png",
        "images/portfolio/planets-fact-site/planets-fact-site-figma.webp",
      ],
      url: "https://github.com/seanred360/planets-fact-site",
      liveSiteUrl: "https://planets-fact-site-mu.vercel.app/",
      technologies: [
        {
          class: "cib:js",
          name: "Javascript",
        },
        {
          class: "cib:css3-shiled",
          name: "CSS",
        },
        {
          class: "cib:sass-alt",
          name: "Sass",
        },
        {
          class: "icomoon-free:html-five",
          name: "HTML",
        },
        {
          class: "bxl:figma",
          name: "Figma",
        },
      ],
    },
    // {
    //   title: "REST 国家API APP",
    //   startDate: "2021",
    //   description:
    //     "Frontend Mentor 挑战。只提供了一个 Figma 文件给我。该网站从 API 获取国家数据。我设计优雅的主题切换系统使它从其他提交中脱颖而出。我学会了如何在这个项目中制作许多不同的组件。我学习了如何在 React 中对 JSON 数据进行排序、搜索和分页。访问 Github 链接以查看我的开发过程的非常详细的分解图片和示例。",
    //   preview: "images/portfolio/rest-countries/preview-rest-countries.webm",
    //   images: [
    //     "images/portfolio/rest-countries/rest-countries-mockup.webp",
    //     "images/portfolio/rest-countries/rest-countries-china.png",
    //     "images/portfolio/rest-countries/rest-countries-page.png",
    //     "images/portfolio/rest-countries/rest-countries-figma.webp",
    //   ],
    //   url: "https://github.com/seanred360/rest-countries-api",
    //   liveSiteUrl: "https://rest-countries-app-seanred.herokuapp.com/",
    //   technologies: [
    //     {
    //       class: "dashicons:rest-api",
    //       name: "REST API",
    //     },
    //     {
    //       class: "simple-icons:react",
    //       name: "React",
    //     },
    //     {
    //       class: "cib:js",
    //       name: "JavaScript",
    //     },
    //     {
    //       class: "cib:sass-alt",
    //       name: "Sass",
    //     },
    //     {
    //       class: "bxl:figma",
    //       name: "Figma",
    //     },
    //   ],
    // },
    // {
    //   title: "众筹",
    //   startDate: "2021",
    //   description:
    //     "带有表单验证的众筹产品页面。 您可以选择奖励等级和金额以美元为单位进行承诺。 我能够在没有任何 Javascript 库（例如 React 或 Angular）的情况下做到这一点。",
    //   preview: "images/portfolio/crowd-funding/preview-crowd-funding.webm",
    //   images: [
    //     "images/portfolio/crowd-funding/crowd-funding-mockup.webp",
    //     "images/portfolio/crowd-funding/crowd-funding-modal.png",
    //     "images/portfolio/crowd-funding/crowd-funding-about.png",
    //     "images/portfolio/crowd-funding/crowd-funding-thanks.png",
    //     "images/portfolio/crowd-funding/crowd-funding-figma.webp",
    //   ],
    //   url: "https://github.com/seanred360/crowdfunding-product-page",
    //   liveSiteUrl: "https://crowdfunding-product-page-tau-plum.vercel.app/",
    //   technologies: [
    //     {
    //       class: "cib:js",
    //       name: "Javascript",
    //     },
    //     {
    //       class: "cib:css3-shiled",
    //       name: "CSS",
    //     },
    //     {
    //       class: "cib:sass-alt",
    //       name: "Sass",
    //     },
    //     {
    //       class: "icomoon-free:html-five",
    //       name: "HTML",
    //     },
    //     {
    //       class: "bxl:figma",
    //       name: "Figma",
    //     },
    //   ],
    // },
  ],
  experience: [
    {
      organization: "Code with Mosh",
      title: "The Complete Node.js Course",
      time: "Oct. 2021",
      lessons: ["225 lessons"],
      technologies: [
        "RESTful API",
        "JavaScript",
        "Express",
        "MongoDB",
        "axios",
        "unit testing",
        "NPM",
        "Nodemon",
        "custom middleware",
        "database integration",
        "Asnychronous Javascript",
        "Data validation",
        "Authorization and authentication",
      ],
    },
    {
      organization: "Code with Mosh",
      title: "The Ultimate Java Mastery Series",
      time: "Sept. 2021",
      lessons: ["260 Lessons"],
      technologies: [
        "InteliJ",
        "implementing an Asynchronous API",
        "Thread pools",
        "Multi-threading",
        "Imperative vs functional programming",
        " object oriented programming",
        "hash tables",
        "inheritance",
        "interfaces",
        "refactoring",
      ],
    },
    {
      organization: "Code with Mosh",
      title: "Mastering React",
      time: "Aug. 2021",
      lessons: ["220 Lessons"],
      technologies: [
        "React",
        "MongoDB",
        "custom hooks",
        " higher order components",
        "Heroku",
        "Authorization",
        "protected API endpoints",
        "JSON web tokens",
        "form validation with Joi",
        "routing",
      ],
    },
    {
      organization: "Code with Mosh",
      title: "The Ultimate Git Course",
      time: "Jul. 2021",
      lessons: ["120 Lessons"],
      technologies: [
        "Github",
        "Creating snapshots",
        "Branching & merging",
        "Handling Conflicts",
        "Code reviews using Pull Requests",
        "Rewriting project history",
        "Git best practices",
      ],
    },
    {
      organization: "Code with Mosh",
      title: "The Ultimate Javascript Mastery Series",
      time: "Jun. 2021",
      lessons: ["100 Lessons"],
      technologies: [
        "ES6",
        "CommonJS",
        "Babel",
        "Webpack",
        "Node",
        "hoisting",
        "prototypical inheritance",
        "abstraction",
        "polymorphism",
        "encapsulation",
        "inheritance",
        "constructors",
        "mixins",
      ],
    },
    {
      organization: "Freecodecamp.org",
      title: "Front End Development Libraries Certification",
      time: "May. 2021",
      lessons: ["300 hours"],
      technologies: ["Bootstrap", "Sass", "React", "Redux"],
    },
    {
      organization: "Freecodecamp.org",
      title: "Javascript Algorithms and Data Structures Certification",
      time: "Jan. 2021",
      lessons: ["300 hours"],
      technologies: [
        "Javascript",
        "Object Oriented Programming",
        "Functional Programming",
        "writing reusable Javascript",
        "ES6",
        "regular expressions",
        "debugging",
        "Data Structures",
        "algorithm scripting",
      ],
    },
    {
      organization: "Freecodecamp.org",
      title: "Responsive Web Design Certification",
      time: "Dec. 2021",
      lessons: ["300 hours"],
      technologies: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "CSS grid",
        "accessibiity",
        "responsive web design",
      ],
    },
    {
      organization: "Ivy International English",
      title: "Making smartboard games for my students",
      time: "Apr. 2017",
      lessons: ["Unity , Game Maker"],
      technologies: [
        "SOME OF MY FAVORITE UNITY PACKAGES:",
        "RealToon shader",
        "Koreographer - Music visualizer",
        "DOTween animation tweener",
        "FinalIK - character physics",
        "Puppetmaster - rag doll physics",
        "Cartoon FX",
      ],
    },
  ],
};

export default secondaryLangData;
