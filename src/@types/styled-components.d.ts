import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      values: {
        lg: 1280;
        md: 960;
        sm: 600;
        xl: 1920;
        xs: 0;
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
