import React, { ReactNode } from 'react';

import s from './Row.scss';

interface IRowProps {
  children: ReactNode;
}

export const Row = ({ children }: IRowProps) => <div className={s.row}>{children}</div>;
