import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Dev config — Ability Kit only, for faster development cycles
const config: Config = {
  title: 'OH API',
  tagline: 'HarmonyOS OH API Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://designer-docs.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'ignore',
  onBrokenAnchors: 'ignore',

  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownImages: 'ignore',
      onBrokenMarkdownLinks: 'ignore',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: { label: 'English' },
      'zh-CN': { label: '中文' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars-dev.ts',
          routeBasePath: '/',
          include: ['ability-kit/**'],
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OH API',
      logo: {
        alt: 'OH API',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/ability-kit/js-api/arkts-ability-ability',
          label: 'API References',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} OpenHarmony. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
