import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Customer portal',
    body: 'A signed-in dashboard with bills, usage analytics, notifications, and support tickets. Email/password or Google sign-in, backed by Firebase Authentication.',
  },
  {
    title: 'Usage analytics with D3',
    body: 'Consumption is rendered with hand-built D3 charts — no charting library — so every axis, tooltip, and transition is under direct control.',
  },
  {
    title: 'RBAC operations back office',
    body: 'A five-role permission matrix (admin, manager, creator, editor, viewer) gates users, societies, customers, billing, advertising, and analytics.',
  },
  {
    title: 'Content Studio',
    body: 'Operators edit every section of the public website — hero slides, services, team, portfolio, jobs, FAQs, offices, certifications, announcements — without a deploy.',
  },
  {
    title: 'Web, Android & iOS from one codebase',
    body: 'Capacitor 8 ships the same React app to the browser and to native Android and iOS, with edge-to-edge handling, push notifications, and in-app updates.',
  },
  {
    title: 'Zero-cost backend',
    body: 'Firebase Auth + Firestore with client-side writes guarded by security rules, FilesHub for uploads, and no server functions. The app runs without paid compute.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/intro">
            Read the docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/account-and-sign-in"
          >
            Get started
          </Link>
          <Link
            className="button button--outline button--lg"
            href="https://sndgc.aoneahsan.com"
          >
            Open the live app
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div key={f.title} className="col col--4" style={{ marginBottom: '1.5rem' }}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link> ·{' '}
          <Link href="https://www.npmjs.com/~aoneahsan">npm</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Customer portal & operations CMS`}
      description="Documentation for the SNGDC app: customer portal (billing, usage analytics, support) and the RBAC admin and content-management studio for a synthetic natural gas distribution company."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
