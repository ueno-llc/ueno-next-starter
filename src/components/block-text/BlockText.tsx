import React from 'react';
import styled from 'styled-components';
import { mediaWidth, responsiveFont } from '../../styles/utils';
import { Container } from '../container/Container';
import { Column, Row } from '../grid';

interface BlockTextProps {
  heading: string;
  description: React.ReactNode;
}

const Block = styled.div`
  padding: 60px 0;
  @media (min-width: ${mediaWidth.sm}) {
    padding: 180px 0;
  }
`;

const Heading = styled.h3`
  margin-bottom: 10px;
  font-family: ${props => props.theme.font.family};
  ${responsiveFont(16, 18)}
`;

const Description = styled.p`
  font-weight: 300;
  line-height: ${26 / 16};
  ${responsiveFont(16, 18)}

  a {
    text-decoration: none;
    font-weight: 400;
    color: #000;
    transition: 200ms opacity ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export function BlockText({ heading, description }: BlockTextProps) {
  return (
    <Container>
      <Block>
        <Row>
          <Column md={5 / 12}>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </Column>
        </Row>
      </Block>
    </Container>
  );
}
