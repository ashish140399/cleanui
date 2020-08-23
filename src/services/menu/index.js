export const getMenuData = [
  // {
  //   category: true,
  //   title: 'Dashboards',
  // },
  // {
  //   title: 'Dashboards',
  //   key: 'dashboards',
  //   icon: 'fe fe-home',
  //   // roles: ['admin'], // set user roles with access to this route
  //   count: 4,
  //   children: [
  //     {
  //       title: 'Dashboard Alpha',
  //       key: 'dashboard',
  //       url: '/dashboard/alpha',
  //     },
  //     {
  //       title: 'Dashboard Beta',
  //       key: 'dashboardBeta',
  //       url: '/dashboard/beta',
  //     },
  //     {
  //       title: 'Dashboard Gamma',
  //       key: 'dashboardGamma',
  //       url: '/dashboard/gamma',
  //     },
  //     {
  //       title: 'Crypto Terminal',
  //       key: 'dashboardCrypto',
  //       url: '/dashboard/crypto',
  //     },
  //   ],
  // },
  {
    category: true,
    title: 'Dashboard',
  },
  {
    title: 'Trends Token',
    key: 'apps',
    icon: 'fe fe-database',
    children: [
      {
        title: 'Overview',
        key: 'appsProfile',
        url: '/apps/profile',
        icon: 'fe fe-database',
      },
      {
        title: 'Rebase History',
        key: 'appsCalendar',
        url: '/apps/calendar',
        icon: 'fe fe-database',
      },
      {
        title: 'Suppply',
        key: 'appsGallery',
        url: '/apps/gallery',
        icon: 'fe fe-database',
      },
      {
        title: 'Terminal',
        key: 'appsCart',
        url: '/apps/messaging',
        icon: 'fe fe-database',
      },
      // {
      //   title: 'Mail',
      //   key: 'appsMail',
      //   url: '/apps/mail',
      // },
    ],
  },
  // {
  //   title: 'Extra Apps',
  //   key: 'extraApps',
  //   icon: 'fe fe-hard-drive',
  //   children: [
  //     {
  //       title: 'Github Explore',
  //       key: 'extraAppsGithubExplore',
  //       url: '/apps/github-explore',
  //     },
  //     {
  //       title: 'Github Discuss',
  //       key: 'extraAppsGithubDiscuss',
  //       url: '/apps/github-discuss',
  //     },
  //     {
  //       title: 'Digitalocean Droplets',
  //       key: 'extraAppsDigitaloceanDroplets',
  //       url: '/apps/digitalocean-droplets',
  //     },
  //     {
  //       title: 'Digitalocean Create',
  //       key: 'extraAppsDigitaloceanCreate',
  //       url: '/apps/digitalocean-create',
  //     },
  //     {
  //       title: 'Google Analytics',
  //       key: 'extraAppsGoogleAnalytis',
  //       url: '/apps/google-analytics',
  //     },
  //     {
  //       title: 'Wordpress Post',
  //       key: 'extraAppsWordpressPost',
  //       url: '/apps/wordpress-post',
  //     },
  //     {
  //       title: 'Wordpress Posts',
  //       key: 'extraAppsWordpressPosts',
  //       url: '/apps/wordpress-posts',
  //     },
  //     {
  //       title: 'Wordpress Add',
  //       key: 'extraAppsWordpressAdd',
  //       url: '/apps/wordpress-add',
  //     },
  //     {
  //       title: 'Todoist List',
  //       key: 'extraAppsTodoistList',
  //       url: '/apps/todoist-list',
  //     },
  //     {
  //       title: 'Jira Dashboard',
  //       key: 'extraAppsJiraDashboard',
  //       url: '/apps/jira-dashboard',
  //     },
  //     {
  //       title: 'Jira Agile Board',
  //       key: 'extraAppsJiraAgileBoard',
  //       url: '/apps/jira-agile-board',
  //     },
  //     {
  //       title: 'Helpdesk Dashboard',
  //       key: 'extraAppsHelpdeskDashboard',
  //       url: '/apps/helpdesk-dashboard',
  //     },
  //   ],
  // },
  // {
  //   title: 'Ecommerce',
  //   key: 'ecommerce',
  //   icon: 'fe fe-shopping-cart',
  //   children: [
  //     {
  //       title: 'Dashboard',
  //       key: 'ecommerceDashboard',
  //       url: '/ecommerce/dashboard',
  //     },
  //     {
  //       title: 'Orders',
  //       key: 'ecommerceOrders',
  //       url: '/ecommerce/orders',
  //     },
  //     {
  //       title: 'Propduct Catalog',
  //       key: 'ecommerceProductCatalog',
  //       url: '/ecommerce/product-catalog',
  //     },
  //     {
  //       title: 'Product Details',
  //       key: 'ecommerceProductDetails',
  //       url: '/ecommerce/product-details',
  //     },
  //     {
  //       title: 'Cart',
  //       key: 'ecommerceCart',
  //       url: '/ecommerce/cart',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth Pages',
  //   key: 'auth',
  //   icon: 'fe fe-user',
  //   children: [
  //     {
  //       title: 'Login',
  //       key: 'authLogin',
  //       url: '/auth/login',
  //     },
  //     {
  //       title: 'Forgot Password',
  //       key: 'authForgotPassword',
  //       url: '/auth/forgot-password',
  //     },
  //     {
  //       title: 'Register',
  //       key: 'authRegister',
  //       url: '/auth/register',
  //     },
  //     {
  //       title: 'Lockscreen',
  //       key: 'authLockscreen',
  //       url: '/auth/lockscreen',
  //     },
  //     {
  //       title: 'Page 404',
  //       key: 'auth404',
  //       url: '/auth/404',
  //     },
  //     {
  //       title: 'Page 500',
  //       key: 'auth500',
  //       url: '/auth/500',
  //     },
  //   ],
  // },
  // {
  //   category: true,
  //   title: 'DAPPS',
  // },
  // {
  //   title: 'Staking',
  //   key: 'antDesign',
  //   icon: 'fe fe-bookmark',
  //   url: '/ui-kits/antd',
  // },
  // {
  //   title: 'Trend 3 in 1',
  //   key: 'bootstrap',
  //   icon: 'fe fe-bookmark',
  //   url: '/ui-kits/bootstrap',
  // },
  // {
  //   title: 'Coming Soon',
  //   key: 'bootstrap',
  //   icon: 'fe fe-bookmark',
  //   url: '/ui-kits/bootstrap',
  // },
  // {
  //   title: 'Coming Soon',
  //   key: 'bootstrap',
  //   icon: 'fe fe-bookmark',
  //   url: '/ui-kits/bootstrap',
  // },
  {
    category: true,
    title: 'DAPPS',
  },
  {
    title: 'Staking',
    key: 'widgets',
    icon: 'fe fe-image',
    count: 47,
  },
  {
    title: 'Trend 3 in 1',
    key: 'cards',
    icon: 'fe fe-credit-card',
  },
  {
    title: 'Coming Soon',
    key: 'tables',
    icon: 'fe fe-grid',
  },
  {
    title: 'Coming Soon',
    key: 'charts',
    icon: 'fe fe-pie-chart',
    disabled: true,
  },
  // {
  //   title: 'Icons',
  //   key: 'icons',
  //   icon: 'fe fe-star',
  //   children: [
  //     {
  //       title: 'Feather Icons',
  //       key: 'iconsFeatherIcons',
  //       url: '/icons/feather-icons',
  //     },
  //     {
  //       title: 'Fontawesome',
  //       key: 'iconsFontawesome',
  //       url: '/icons/fontawesome',
  //     },
  //     {
  //       title: 'Linearicons Free',
  //       key: 'iconsLineariconsFree',
  //       url: '/icons/linearicons-free',
  //     },
  //     {
  //       title: 'Icomoon Free',
  //       key: 'iconsIcomoonFree',
  //       url: '/icons/icomoon-free',
  //     },
  //   ],
  // },
  // {
  //   category: true,
  //   title: 'Advanced',
  // },
  // {
  //   title: 'Form Examples',
  //   key: 'formExamples',
  //   icon: 'fe fe-menu',
  //   url: '/advanced/form-examples',
  // },
  // {
  //   title: 'Email Templates',
  //   key: 'emailTemplates',
  //   icon: 'fe fe-mail',
  //   url: '/advanced/email-templates',
  // },
  // {
  //   title: 'Pricing Tables',
  //   key: 'pricingTables',
  //   icon: 'fe fe-command',
  //   url: '/advanced/pricing-tables',
  // },
  // {
  //   title: 'Invoice',
  //   key: 'invoice',
  //   icon: 'fe fe-file-text',
  //   url: '/advanced/invoice',
  // },
  // {
  //   title: 'Utilities',
  //   key: 'utilities',
  //   icon: 'fe fe-inbox',
  //   url: '/advanced/utilities',
  // },
  // {
  //   title: 'Grid',
  //   key: 'grid',
  //   icon: 'fe fe-grid',
  //   url: '/advanced/grid',
  // },
  // {
  //   title: 'Typography',
  //   key: 'typography',
  //   icon: 'fe fe-type',
  //   url: '/advanced/typography',
  // },
  // {
  //   title: 'Colors',
  //   key: 'colors',
  //   icon: 'fe fe-feather',
  //   url: '/advanced/colors',
  // },
  // {
  //   title: 'Nested Items',
  //   key: 'nestedItem1',
  //   icon: 'fe fe-layers',
  //   disabled: true,
  //   children: [
  //     {
  //       title: 'Nested Item 1-1',
  //       key: 'nestedItem1-1',
  //       children: [
  //         {
  //           title: 'Nested Item 1-1-1',
  //           key: 'nestedItem1-1-1',
  //         },
  //         {
  //           title: 'Nested Items 1-1-2',
  //           key: 'nestedItem1-1-2',
  //           disabled: true,
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Nested Items 1-2',
  //       key: 'nestedItem1-2',
  //     },
  //   ],
  // },
  // {
  //   title: 'Disabled Item',
  //   key: 'disabledItem',
  //   icon: 'fe fe-slash',
  //   disabled: true,
  // },
]
