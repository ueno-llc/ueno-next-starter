import React from 'react';
import { AppProps } from 'next/app';

import AppLayout from '../src/components/app-layout/AppLayout';

// tslint:disable-next-line
export default ({ Component, pageProps }: AppProps) => (
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
);
