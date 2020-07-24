import { DefaultTheme } from 'styled-components';

const pxToRem = (n: number): string => `${n / 16}rem`;

const theme: DefaultTheme = {
  breakpoints: {
    values: {
      lg: 1280,
      md: 960,
      sm: 600,
      xl: 1920,
      xs: 0,
    },
  },
  spacing: {
    extraTight: pxToRem(4),
    tight: pxToRem(8),
    baseTight: pxToRem(12),
    base: pxToRem(16),
    loose: pxToRem(20),
    extraLoose: pxToRem(32),
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    '0 0.3px 3.1px rgba(0, 0, 0, 0.014), 0 0.7px 7.4px rgba(0, 0, 0, 0.02), 0 1.4px 14px rgba(0, 0, 0, 0.025), 0 2.5px 25px rgba(0, 0, 0, 0.03), 0 4.6px 46.8px rgba(0, 0, 0, 0.036), 0 11px 112px rgba(0, 0, 0, 0.05)',
  ],
  palette: {
    common: {
      white: '#fff',
      black: '#000',
    },
    primary: {
      main: '#ffc600',
      contrastText: '#000',
    },
    secondary: {
      main: '#1e345d',
      contrastText: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#808080',
    },
  },
  zIndex: {},
  mixins: { pxToRem },
};

type T = typeof theme;

export type Theme = typeof theme;
export type ThemeSpacing =
  | 'extraTight'
  | 'tight'
  | 'baseTight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export default theme;
