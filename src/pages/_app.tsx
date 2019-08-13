import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppLayout } from '../components/app-layout/AppLayout';
import { theme } from '../styles/theme';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    );
  }
}
