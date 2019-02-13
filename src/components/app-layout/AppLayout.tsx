import React from 'react';
import Helmet from 'react-helmet';

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />
    <Header />

    {children}

    {isDev && <Devtools />}
  </div>
);
