import styled from 'styled-components';
import { responsiveFont } from '../../styles/utils';
import { Container } from '../container/Container';
import { Column, Row } from '../grid';

const Wrapper = styled(Row)`
  padding-top: 60px;
  padding-bottom: 60px;
  border-bottom: 1px solid #e5e5e5;
`;

const Paragraph = styled.p`
  font-family: ${props => props.theme.font.family};
  font-weight: 300;
  ${responsiveFont(26, 32)}
`;

export function Intro({ children }) {
  return (
    <Container>
      <Wrapper>
        <Column md={7 / 12}>
          <Paragraph>{children}</Paragraph>
        </Column>
      </Wrapper>
    </Container>
  );
}
