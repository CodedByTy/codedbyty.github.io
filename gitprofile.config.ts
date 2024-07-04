// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'CodedByTy', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BilligerHost',
          description:
            'Front-End Web-Dev - Created and Edited the landing page of BilligerHost.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpTLh8XsQROB2xWhvJ722kMGQ6qSrqtbk-g&s',
          link: 'https://billing.billigerhost.com/landing/',
        },
        {
          title: 'Coming Soon!',
          description: '',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of LearnWithTyler',
    description: '',
    imageURL: '',
  },
  social: {
    email: 'tylercalumacker@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Tailwind',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'BilligetHost',
      position: 'Front-End Developer',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://billing.billigerhost.com',
    },
    {
      company: 'CycTrek',
      position: 'CEO',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'HighSchool',
      degree: 'High-School',
      from: '2020',
      to: 'Present',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      'dark',
      /* 'cupcake',
      'bumblebee',
      'emerald',
      'corporate',*/
      'synthwave',
      /* 'retro',
      'cyberpunk',
      'valentine', */
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
