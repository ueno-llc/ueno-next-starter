import React, { ReactNode } from 'react';

import s from './Container.scss';

interface IContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: IContainerProps) => (
  <section className={s.container}>{children}</section>
);
