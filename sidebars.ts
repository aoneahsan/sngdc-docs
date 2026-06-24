import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for the SNGDC docs.
 *
 * Every page documents a real surface of the SNGDC app, read from the
 * application source (https://github.com/aoneahsan/sngdc). No invented features.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/account-and-sign-in',
        'getting-started/customer-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Customer Features',
      collapsed: false,
      items: [
        'features/billing',
        'features/usage-analytics',
        'features/notifications',
        'features/support',
        'features/profile-and-account',
      ],
    },
    {
      type: 'category',
      label: 'Admin & Operations',
      collapsed: false,
      items: [
        'admin/overview',
        'admin/rbac-and-users',
        'admin/societies-and-customers',
        'admin/content-studio',
        'admin/billing-advertising-analytics',
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      collapsed: false,
      items: [
        'platform/tech-stack',
        'platform/mobile-and-capacitor',
        'platform/theme-customizer',
        'platform/privacy-and-data',
      ],
    },
    'about-the-author',
  ],
};

export default sidebars;
