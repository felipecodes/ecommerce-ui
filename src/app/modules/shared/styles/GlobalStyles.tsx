import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /**
   * Reset
   */

  html,
  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-top: 0;
    line-height: 1;
  }

  img {
    max-width: 100%;
  }

  /**
   * Box Sizing
   */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /**
   * Typography
   */

  body {
    font-family: Roboto;
  }
`;

export default GlobalStyles;
