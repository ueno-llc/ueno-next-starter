import { AlignSelfProperty } from 'csstype';
import { get } from 'lodash';
import { math } from 'polished';
import styled, { css } from 'styled-components';

interface StyledTheme {
  theme: {
    grid?: {
      gutter?: number;
    };
  };
}

interface ColumnSettings {
  width?: number;
  offset?: number;
  align?: AlignSelfProperty;
  gutter?: number | string;
}

interface ColumnProps extends ColumnSettings {
  sm?: number | ColumnSettings;
  md?: number | ColumnSettings;
  lg?: number | ColumnSettings;
}

function columnStyles(props: ColumnSettings & StyledTheme) {
  return css`
    align-self: ${props.align || 'stretch'};

    padding-left: ${math(
      `${props.gutter || get(props, 'theme.gutter', 30)}/2px`
    )};
    padding-right: ${math(
      `${props.gutter || get(props, 'theme.gutter', 30)}/2px`
    )};

    width: ${math(`${props.width || 1} * 100`)}%;
    margin-left: ${math(`${props.offset || 0} * 100`)}%;
  `;
}

// render media queries for (sm, md, lg)
function breakpointStyles(props) {
  const output = [];
  for (const breakpointName in props.theme.breakpoints) {
    if (props[breakpointName]) {
      const breakpoint = props[breakpointName];
      const breakpointProps = {
        ...props,
        ...(typeof breakpoint === 'object'
          ? breakpoint
          : { width: breakpoint }),
      };
      output.push(css`
        @media (min-width: ${props.theme.breakpoints[breakpointName].width}px) {
          ${columnStyles(breakpointProps)}
        }
      `);
    }
  }

  return output;
}

export const Column = styled.div<ColumnProps>`
  flex: none;
  ${columnStyles}
  ${breakpointStyles}
`;
