import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import StarterLogo from '../../assets/svg/starter-logo.svg';
import { mediaWidth, variables } from '../../styles/utils';
import { Container } from '../container/Container';

const HeaderRoot = styled.header`
  display: block;
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  padding: ${variables.gutter} 0;
`;

const Logo = styled(StarterLogo)`
  display: block;

  height: 16px;
  width: auto;

  @media (min-width: ${mediaWidth.md}) {
    height: 18px;
  }
`;

const Navigation = styled.div`
  display: flex;
  margin-left: auto;
`;

export function Header({ children }) {
  return (
    <HeaderRoot>
      <Container>
        <Content>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <Navigation>{children}</Navigation>
        </Content>
      </Container>
    </HeaderRoot>
  );
}
