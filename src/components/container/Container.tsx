import { math } from 'polished';
import styled, { css } from 'styled-components';

function breakpointStyles(
  pageWidth: number,
  { width, gutter }: { width: number; gutter: number }
) {
  return css`
    @media (min-width: ${width}px) {
      padding-left: ${gutter}px;
      padding-right: ${gutter}px;
      max-width: ${math(`${pageWidth} + ${width}`)}px;
    }
  `;
}

export const Container = styled.div`
  flex-grow: 1;

  margin: 0 auto;

  padding-left: ${props => props.theme.breakpoints.sm.gutter}px;
  padding-right: ${props => props.theme.breakpoints.sm.gutter}px;

  max-width: ${props =>
    math(`${props.theme.pageWidth} + ${props.theme.breakpoints.sm.gutter}`)}px;

  @media (min-width: ${props => props.theme.breakpoints.sm.width}px) {
    max-width: ${props =>
      math(`${props.theme.pageWidth} + ${props.theme.breakpoints.sm.width}`)}px;
  }

  ${props =>
    breakpointStyles(props.theme.pageWidth, props.theme.breakpoints.md)}
  ${props =>
    breakpointStyles(props.theme.pageWidth, props.theme.breakpoints.lg)}
`;
