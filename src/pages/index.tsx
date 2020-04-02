import React from 'react';
import Head from 'next/head';

import { BlockText } from 'components/block-text/BlockText';
import { Highlight } from 'components/intro/Highlight';
import { Intro } from 'components/intro/Intro';

export default () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Intro>
      Opinionated starter by Ueno, using opinionated dependencies 🤪,{' '}
      <Highlight>TypeScript</Highlight>,&nbsp;
      <Highlight>SCSS</Highlight>, <Highlight>CSS Modules</Highlight>,{' '}
      <Highlight>React Hooks</Highlight>,&nbsp;
      <Highlight>root resolver</Highlight>, <Highlight>code splitting</Highlight> and a lot of love.
    </Intro>

    <BlockText
      heading="Who we are"
      description={
        <>
          Ueno is a full-service agency, busy designing and building beautiful digital products,
          brands, and experiences. For more informations go to{' '}
          <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
            ueno.co
          </a>
          .
        </>
      }
    />
  </>
);
