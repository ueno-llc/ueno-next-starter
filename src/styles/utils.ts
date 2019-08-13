import { css } from 'styled-components';

export const mediaWidth = {
  sm: props => props.theme.breakpoints.sm.width,
  md: props => props.theme.breakpoints.md.width,
  lg: props => props.theme.breakpoints.lg.width,
};

export const variables = {
  gutter: props => `${props.theme.gutter}px`,
};

export function responsiveFont(
  minSize?: number,
  size?: number,
  limit?: number
) {
  return function responseFontFn(props) {
    minSize = minSize || props.theme.font.sizeMin;
    size = size || props.theme.font.size;
    limit = limit || props.theme.pageLimit;

    const fontMultiplier = p =>
      (size - minSize) / p.theme.pageLimit - p.theme.baseline;
    const fontBaseline = p => minSize - fontMultiplier(p) * p.theme.baseline;

    // prettier-ignore
    return css`
      font-size: ${minSize}px;
      font-size: calc(${minSize}px * var(--scale-font));

      @media (min-width: ${p => p.theme.breakpoints.sm.width}px) {
        font-size: ${minSize}px;
        font-size: calc(${fontMultiplier} * 100vw + (${fontBaseline} * var(--scale-font)));
      }

      @media (min-width: ${p => p.theme.pageLimit}px) {
        font-size: ${minSize}px;
        font-size: calc(${size}px * var(--scale-font));
      }
    `;
  };
}
