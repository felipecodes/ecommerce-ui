import styled from 'styled-components';

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.palette.common.white};
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const CartItemImage = styled.img`
  max-width: 80px;
`;
