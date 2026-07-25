import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// SNGDC — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// App: https://sngdc.aoneahsan.com  ·  App repo: https://github.com/aoneahsan/sngdc
// ---------------------------------------------------------------------------

const DOCS_URL = 'https://sngdc-docs.aoneahsan.com';
const APP_URL = 'https://sngdc.aoneahsan.com';

const config: Config = {
  title: 'SNGDC Docs',
  tagline: 'Customer portal, billing, usage analytics, support, and the RBAC operations CMS for a synthetic natural gas distribution company.',
  favicon: 'img/favicon.svg',

  // Production URL — served from Firebase Hosting site `sngdc-docs` and GitHub Pages.
  url: DOCS_URL,
  baseUrl: '/',

  // GitHub metadata (drives deploy + OG tags + edit-this-page links)
  organizationName: 'aoneahsan',
  projectName: 'sngdc-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags. The JSON-LD payloads (WebSite, Organization,
  // SoftwareApplication) help Google Rich Results, Perplexity, ChatGPT, and
  // Claude extract structured entity data when citing this documentation.
  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: `${DOCS_URL}/` },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'SNGDC Docs',
        href: `${DOCS_URL}/sitemap.xml`,
      },
    },
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'SNGDC Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'apple-mobile-web-app-title', content: 'SNGDC Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#06b6d4' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SNGDC Documentation',
        url: DOCS_URL,
        description:
          'Documentation for the SNGDC app — a web and mobile customer portal and RBAC operations CMS for a synthetic natural gas (SNG) distribution company in Pakistan. Built with React, Capacitor, and Firebase. Author: Ahsan Mahmood.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SNGDC',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Android, iOS, Web',
        url: APP_URL,
        sameAs: DOCS_URL,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        author: { '@type': 'Person', name: 'Ahsan Mahmood', url: 'https://aoneahsan.com' },
        description:
          'Customer portal (accounts, billing, usage analytics, notifications, support) and RBAC admin/operations CMS for a synthetic natural gas distribution company. React 19 + Capacitor 8 + Firebase.',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
        founder: { '@type': 'Person', name: 'Ahsan Mahmood' },
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // `docs/` is BOTH the published content dir and the home of the
          // fixed-path internal file docs/MANUAL-TASKS.md. Keep the path (the
          // global rule fixes it) but never publish it — this repo is public.
          // NOTE: `exclude` REPLACES the plugin defaults, so they are restated.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
          ],
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/sngdc-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: 'date',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      { name: 'description', content: 'Documentation for the SNGDC app — customer portal (billing, usage analytics, support) and RBAC operations CMS for a synthetic natural gas distribution company. Maintained by Ahsan Mahmood.' },
      { name: 'keywords', content: 'SNGDC, synthetic natural gas, SNG, gas distribution app, customer portal, billing, usage analytics, RBAC admin, content management, Capacitor app, React, Firebase, Pakistan energy' },
      { name: 'author', content: 'Ahsan Mahmood' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'SNGDC Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'SNGDC',
      logo: {
        alt: 'SNGDC logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/getting-started/account-and-sign-in',
          label: 'Get Started',
          position: 'left',
        },
        {
          to: '/about-the-author',
          label: 'Author',
          position: 'right',
        },
        {
          href: APP_URL,
          label: 'Live App',
          position: 'right',
        },
        {
          href: 'https://github.com/aoneahsan/sngdc-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Account & Sign-in', to: '/getting-started/account-and-sign-in' },
            { label: 'Customer Dashboard', to: '/getting-started/customer-dashboard' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Live App', href: APP_URL },
            { label: 'Privacy Policy', href: `${APP_URL}/privacy` },
            { label: 'Terms of Service', href: `${APP_URL}/terms` },
            { label: 'Docs source', href: 'https://github.com/aoneahsan/sngdc-docs' },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'tsx', 'yaml', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
