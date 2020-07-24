import styled from 'styled-components';
import ShopCartSvg from 'assets/icons/shopping-cart.svg';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.base};
  background: ${(props) => props.theme.palette.secondary.main};
`;

export const ShopCartIcon = styled<React.FC<{ onClick(): void }>>(ShopCartSvg)`
  width: ${(props) => props.theme.mixins.pxToRem(32)};
  height: ${(props) => props.theme.mixins.pxToRem(32)};
  stroke: ${(props) => props.theme.palette.secondary.contrastText};
  cursor: pointer;
`;
