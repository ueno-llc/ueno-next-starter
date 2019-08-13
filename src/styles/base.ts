import { createGlobalStyle, css } from 'styled-components';
import { responsiveFont } from './utils';

// stylelint-disable selector-type-no-unknown
export const BaseStyles = createGlobalStyle`
  ${css`
    @-ms-viewport {
      width: device-width;
    }
    @-o-viewport {
      width: device-width;
    }
    @viewport {
      width: device-width;
    }
  `}

  :root {
    --scale-element: 1;
    --scale-font: 1;

    ${props =>
      props.theme.verticalBreakpoints.map(
        ({ height, scale }) => css`
          @media (max-height: ${height}px) {
            --scale-element: ${scale};
            --scale-font: ${scale};
          }
        `
      )}
  }

  html,
  body {
    min-height: 100vh;

    background-color: ${(props: any) => props.theme.colors.background}
  }

  html {
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    /* always show the vertical scrollbar so that content doesn't jump */
    overflow-y: scroll;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    box-sizing: border-box;
  }

  /* inherited from <html> */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    ${responsiveFont()}

    position: relative;

    margin: 0;

    font-family: ${(props: any) => props.theme.font.family};
    line-height: ${(props: any) => props.theme.font.lineHeight};
    /* iOS on orientation change */
    text-size-adjust: 100%;

    color: ${(props: any) => props.theme.colors.font};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* placeholders */
  input,
  textarea,
  select {
    &::placeholder {
      opacity: 1;
      color: ${(props: any) => props.theme.colors.placeholder};
    }
  }
`;
