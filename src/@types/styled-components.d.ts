import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      values: {
        xs: 480;
        sm: 768;
        md: 992;
        lg: 1200;
        xl: 1400;
      };
    };
    spacing: {
      extraTight: string;
      tight: string;
      baseTight: string;
      base: string;
      loose: string;
      extraLoose: string;
    };
    shape: {
      borderRadius: 4;
    };
    shadows: string[];
    transitions: string[];
    palette: {
      common: {
        white: string;
        black: string;
      };
      primary: {
        main: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        contrastText: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
    mixins: {
      pxToRem(n: number): string;
    };
    zIndex: Record<string, number>;
  }
}
