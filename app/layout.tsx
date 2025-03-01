import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Layout from '../components/layout/layout';
import SetGridGap from '../components/utils/set.grid.util';
import { Analytics } from '@vercel/analytics/react';

// Global CSS Imports
import 'the-new-css-reset/css/reset.css';
import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import 'devicon/devicon.min.css';
import '../styles/css/variables.css';
import '../styles/css/global.css';

export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
  icons: {
    icon: '/favicon/favicon-32x32.png',
    shortcut: '/favicon/favicon-32x32.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  themeColor: '#ffffff',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <LazyMotion features={domAnimation}>
          <Layout>
            {children}
            <SetGridGap />
            <Analytics />
          </Layout>
        </LazyMotion>
      </body>
    </html>
  );
}