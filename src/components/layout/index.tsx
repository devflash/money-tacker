import Head from 'next/head';

import Navigation from '@components/components/navigation';
import { ReactNode } from 'react';

type LayoutProps={
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => (
    <>
      <Head>
        <title>Money Tracker</title>
        <meta name="description" content="Track incomes and expenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        {children}
      </main>
    </>
)

export default Layout;