import NextLink from 'next/link';
import * as React from 'react';

interface LinkProps {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}

export const Link = ({ children, to, ...props }: LinkProps) => (
  <NextLink href={to}>
    <a {...props}>{children}</a>
  </NextLink>
);
