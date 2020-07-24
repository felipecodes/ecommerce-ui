import { css, FlattenSimpleInterpolation } from 'styled-components';
import theme, { Breakpoint } from './theme';

type MediaFn = (styles: any) => FlattenSimpleInterpolation;

const createMedia = (breakpoint: Breakpoint): MediaFn => (styles) => css`
  @media screen and (min-width: ${theme.breakpoints.values[breakpoint]}px) {
    ${css(styles)};
  }
`;

const media = {
  xs: createMedia('xs'),
  sm: createMedia('sm'),
  md: createMedia('md'),
  lg: createMedia('lg'),
  xl: createMedia('xl'),
};

export default media;
