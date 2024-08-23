// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.oceanicNext;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Medoix',
  tagline: 'Pentester | DevOps | DevSecOps | Bug Hunter | Hacker of Things.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://medoix.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'medoix', // Usually your GitHub org/user name.
  projectName: 'medoix.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'content',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/medoix/medoix.com/tree/main/',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/portrait.png',
      navbar: {
        logo: {
          alt: 'medoix',
          src: 'img/portrait.png',
          href: '/',
          target: '_self',
        },
        title: '',
        items: [
          {
            position: 'left',
            label: 'Projects',
            to: '/projects',
          },
          {
            position: 'left',
            label: 'Books',
            to: '/books/reading',
          },
          {
            position: 'left',
            label: 'Resume',
            to: '/resume/experience',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'GHW986H5X1',
        apiKey: 'a4f44735aca2e34b265ce74ea3e0af62',
        indexName: 'medoix.com',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
      scripts: [
        {
          src: 'https://scripts.simpleanalyticscdn.com/latest.js',
          async: true,
          defer: true,
        },
        {
          src: 'https://www.googletagmanager.com/gtm.js?id=GTM-MHW4TWVD',
          async: true,
        },
      ],
      themeConfig: {
        // ... other theme configurations
        headTags: [
          {
            tagName: 'noscript',
            innerHTML:
              '<img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" />',
          },
        ],
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-T39XQ0VWEB',
        anonymizeIP: true,
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  stylesheets: ['src/css/custom.css'],
};

export default config;
