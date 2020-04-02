import React, { ReactNode } from 'react';

import s from './Highlight.scss';

interface IHighlightProps {
  children: ReactNode;
}

export const Highlight = ({ children }: IHighlightProps): any => {
  return (children as string)?.split(' ').map((word, index, words) => (
    <span key={word} className={s(s.highlight, { isFirst: words.length > 1 && index === 0 })}>
      <span className={s.highlight__text}>{word}</span>
      <span className={s.highlight__color} />
    </span>
  ));
};
