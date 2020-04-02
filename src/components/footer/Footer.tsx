import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';

import s from './Footer.scss';

interface ISocial {
  icon: ReactNode;
  to: string;
}

interface IFooterProps {
  logo: ReactNode;
  social: ISocial[];
}

export const Footer = ({ logo, social }: IFooterProps) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
          {logo}
        </a>

        <ul className={s.footer__list}>
          {social.map((item) => (
            <li key={item.to} className={s.footer__item}>
              <a href={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </div>
);
