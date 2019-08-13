import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '../container/Container';

interface SegmentProps {
  children: React.ReactNode;
  container?: boolean;
}

const paddingTop = value => css`
  padding-top: ${value}px;
  @supports (--css: variables) {
    padding-top: calc(${value}px * var(--scale-element));
  }
`;

const paddingBottom = value => css`
  padding-bottom: ${value}px;
  @supports (--css: variables) {
    padding-bottom: calc(${value}px * var(--scale-element));
  }
`;

const SegmentEl = styled.div`
  flex-grow: 1;

  ${props => paddingTop(props.theme.gutter * 3)}
  ${props => paddingBottom(props.theme.gutter * 3)}

  @media (min-width: ${props => props.theme.breakpoints.sm.width}) {
    ${props => paddingTop(props.theme.segmentPadding / props.theme.pageLimit)}
    ${props =>
      paddingBottom(props.theme.segmentPadding / props.theme.pageLimit)}
  }

  @media (min-width: ${props => props.theme.pageLimit}) {
    ${props => paddingTop(props.theme.segmentPadding)}
    ${props => paddingBottom(props.theme.segmentPadding)}
  }
`;

export function Segment(props: SegmentProps) {
  const { children, container = true } = props;

  if (container) {
    return (
      <Container>
        <SegmentEl>{children}</SegmentEl>
      </Container>
    );
  }

  return <SegmentEl>{children}</SegmentEl>;
}
