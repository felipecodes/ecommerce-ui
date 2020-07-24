import styled, { css } from 'styled-components';
import { Breakpoint } from 'app/modules/shared/styles/theme';

type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const container = css`
  display: flex;
  flex-wrap: wrap;
`;

const column = (breakpoint: Breakpoint, n) => css`
  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.values[breakpoint]}px) {
    width: calc(${(n / 12) * 100}%);
    padding: 0.5rem;
  }
`;

const Grid = styled.div<{
  container?: boolean;
  item?: boolean;
  xs?: Column;
  sm?: Column;
  md?: Column;
  lg?: Column;
}>`
  width: 100%;

  ${(props) => props.container && container}
  ${(props) => props.xs && column('xs', props.xs)}
  ${(props) => props.sm && column('sm', props.sm)}
  ${(props) => props.md && column('md', props.md)}
  ${(props) => props.lg && column('lg', props.lg)}
`;

export default Grid;
