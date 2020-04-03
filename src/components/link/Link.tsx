import React from 'react';
import NextLink from 'next/link';

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
