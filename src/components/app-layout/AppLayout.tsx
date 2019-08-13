import React from 'react';
import styled from 'styled-components';
import Dribbble from '../../assets/svg/dribbble.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Github from '../../assets/svg/github.svg';
import Instagram from '../../assets/svg/instagram.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Logo from '../../assets/svg/ueno-logo.svg';
import { BaseStyles } from '../../styles/base';
import { FontStyles } from '../../styles/fonts';
import { ResetStyles } from '../../styles/reset';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { HeaderLink } from '../header/HeaderLink';

const Layout = styled.div`
  display: block;
  min-height: 100vh;
`;

export function AppLayout({ children }) {
  return (
    <>
      <ResetStyles />
      <FontStyles />
      <BaseStyles />
      <Layout>
        <Header>
          <HeaderLink name="about" href="/about" />
          <HeaderLink
            name="github"
            href="https://github.com/ueno-llc"
            icon={<Github />}
          />
        </Header>
        {children}
        <Footer
          logo={<Logo />}
          social={[
            { icon: <Dribbble />, to: 'https://dribbble.com/ueno' },
            { icon: <Twitter />, to: 'https://twitter.com/uenodotco' },
            { icon: <Github />, to: 'https://github.com/ueno-llc' },
            { icon: <Instagram />, to: 'https://www.instagram.com/uenodotco' },
            { icon: <Facebook />, to: 'https://www.facebook.com/uenodotco' },
            { icon: <Linkedin />, to: 'https://www.linkedin.com/company/ueno' },
          ]}
        />
      </Layout>
    </>
  );
}
