const primaryLangData = {
  page_info: {
    bio_header: "Hi",
    bio: "👋 I am Sean Redmon, an enthusiastic teacher and software developer. I got started when I was coding smartboard games for my young students in China. Later I grew to making full stack apps. I believe in showing, not telling, so please check-out my projects!",
    section_names: {
      about: "About me",
      projects: "My Work",
      skills: "My Tech Stack",
      experience: "My developer journey",
    },
  },
  projects: [
    {
      title: "Full Stack Feedback Board",
      startDate: "2022",
      description:
        "My most ambitious project to date. I cannot even fit all the things here that I learned from creating this app. Created with the MERN stack. *Users can create, upvote, edit and delete posts. *Leave comments and reply comments. *Create an account, login/out, reset their password and change their account info. The post data is all stored on my hosted Mongo Database. The user profiles are stored on Firebase.",
      preview: "images/portfolio/feedback-app/preview-feedback-app.webm",
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
      title: "Donnie Fan Comedy",
      startDate: "2021",
      description:
        "An original website for the China based comedian Donnie Fan. I worked directly with Donnie and created a Figma design that fits his needs. I coded and put the site online for the client. This was my first freelance project. I learned a lot about the process of getting a site live. It was an invaluable experience working with a real client. I learned how to communicate expectations, timelines, pricing and how to find the right design for their needs. The site has evolved over time, as Donnie has started touring and writing plays. I am still currently maintaining and updating this site. In 2022 the site was rebuilt with NextJS to serve static HTML pages that google can crawl easier. Currently this site ranks #1 for the search term donnie fan ",
      preview: "images/portfolio/donnie-fan/preview-donnie-fan.webm",
      images: [
        "images/portfolio/donnie-fan/donnie-fan-mockup.webp",
        "images/portfolio/donnie-fan/donnie-fan-medea.png",
        "images/portfolio/donnie-fan/donnie-fan-weibo.png",
        "images/portfolio/donnie-fan/donnie-fan-chat.png",
        "images/portfolio/donnie-fan/donnie-fan-about.png",
        "images/portfolio/donnie-fan/donnie-fan-desktop-events-preview.webp",
        "images/portfolio/donnie-fan/donnie-fan-figma.webp",
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
      title: "Rest Countries API app",
      startDate: "2021",
      description:
        "A Frontend Mentor challenge. Only a Figma file was provided to me. This website gets country data from an API. My elegantly designed theme switcher system makes it stand out from other submissions. The themes are controlled by global variables that can be changed easily and the site remembers the user preferences between refreshes. I learned how to make many different components in this project. I learned how to sort, search, and paginate JSON data in React. Visit the Github link to see a very detailed breakdown of my dev process with pics and examples.",
      preview: "images/portfolio/rest-countries/preview-rest-countries.webm",
      images: [
        "images/portfolio/rest-countries/rest-countries-mockup.webp",
        "images/portfolio/rest-countries/rest-countries-china.png",
        "images/portfolio/rest-countries/rest-countries-page.png",
        "images/portfolio/rest-countries/rest-countries-figma.webp",
      ],
      url: "https://github.com/seanred360/rest-countries-api",
      liveSiteUrl: "https://rest-countries-app-seanred.herokuapp.com/",
      technologies: [
        {
          class: "dashicons:rest-api",
          name: "REST API",
        },
        {
          class: "simple-icons:react",
          name: "React",
        },
        {
          class: "cib:js",
          name: "JavaScript",
        },
        {
          class: "cib:sass-alt",
          name: "Sass",
        },
        {
          class: "bxl:figma",
          name: "Figma",
        },
      ],
    },
    {
      title: "Planets Fact Site",
      startDate: "2021",
      description:
        "A Frontend Mentor challenge, I was only provided a Figma Design file to work with. My submission stands out from the crowd because of the stunning animations I created with AnimeJS. I wanted to challenge myself and really master the basics. I got this result without any Javascript frameworks such as React or Angular. Click the Github icon above for a very detailed breakdown of the code with pictures and examples.",
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
    {
      title: "Crowd Funding",
      startDate: "2021",
      description:
        "A crowdfunding product page with form validation. The challenge was to replicate the Figma design file as close as possible. I finished this challenge without a Javascript library or framework. There are zero HTML validation or accessibility issues. Which is important for a site's Google SEO",
      preview: "images/portfolio/crowd-funding/preview-crowd-funding.webm",
      images: [
        "images/portfolio/crowd-funding/crowd-funding-mockup.webp",
        "images/portfolio/crowd-funding/crowd-funding-modal.png",
        "images/portfolio/crowd-funding/crowd-funding-about.png",
        "images/portfolio/crowd-funding/crowd-funding-thanks.png",
        "images/portfolio/crowd-funding/crowd-funding-figma.webp",
      ],
      url: "https://github.com/seanred360/crowdfunding-product-page",
      liveSiteUrl: "https://crowdfunding-product-page-tau-plum.vercel.app/",
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
    {
      title: "Kid's Beginner A book",
      startDate: "2020",
      description:
        "An English teaching tool for smartboards at Ivy International English in China. I felt our schools curriculum needed to be modernized to make learning easier for our students. Previously they had to find a way to play CD's and find the correct audio files to learn at home. This was tedious and the children couldn't do it without their parents help. Most of the students in China do not own computers, they own smartphones. Therefore I made this app available to students on Android as an APK and other teachers as a windows .exe.",
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
      title: "ESL Games Collection",
      startDate: "2017-2020",
      description:
        "14 games I created for the smartboard in my ESL class in China. They were designed to be 10-15 minute group activites to grab the students attention and make them excited about class. The games were usually played in teams that competed. Each of the games had offline interactions in mind to facilite practicing English. For example, the dice roll board game was played amongst a class of 50 students. The student taking their team's turn could call out a student in the class to ask the question to or force them to do what the game prompts said. I created every game individually over 2-3 years and finally compiled them into one UI. ESL Games Collection was Designed to run on low end Windows PCs with a 4:3 resolution because that is what classrooms have in China. The WebGL version was created for demo purposes only, and contains many bugs. Please download the Windows .exe version to get the intended experience.",
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
      title: "Smart Board Developer",
      time: "Apr. 2017",
      lessons: ["Unity"],
      technologies: [
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

export default primaryLangData;
