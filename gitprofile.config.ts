const CONFIG = {
  github: {
    username: 'CodedByTy',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
    },
    external: {
      header: 'My Projects',
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
    title: 'Portfolio of CodedByTy',
    description: '',
    imageURL: '',
  },
  social: {
    email: 'tylercalumacker@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
    'HTML',
    'CSS',
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
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    disableSwitch: true,

    respectPrefersColorScheme: false,

    displayAvatarRing: true,

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
