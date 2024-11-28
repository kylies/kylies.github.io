// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kymira',
  tagline: 'Dinosaurs are cool',
  url: 'https://kymira.ca',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon2.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kylies', // Usually your GitHub org/user name.
  projectName: 'kylies.github.io', // Usually your repo name.
  deploymentBranch: 'deployment', // The name of the deployment branch.
  trailingSlash: false,

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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Kymira',
        logo: {
          alt: 'My Site Logo',
          src: 'img/large-logo.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://www.youtube.com/channel/UCuDQ7ixvCci_cvZ9f9jznVA', label: 'Altar Stone', position: 'left'},
          {to: '/about', label: 'About me', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'D&D Campaigns',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'D&D Campaigns',
                to: '/docs/intro',
              },
              {
                label: 'About',
                to: '/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/lautir',
              },
              {
                label: 'BluSky',
                href: 'https://bsky.app/profile/kymira.bsky.social',
              },
              {
                label: 'Cara',
                href: 'https://cara.app/kymira',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Altar Stone',
                href: 'https://www.youtube.com/channel/UCuDQ7ixvCci_cvZ9f9jznVA',
              },
              {
                label: 'RSS Feed',
                href: 'https://www.kymira.ca/blog/rss.xml',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kymira, Inc. Built with Docusaurus.`,
      },

    }),
};

module.exports = config;
