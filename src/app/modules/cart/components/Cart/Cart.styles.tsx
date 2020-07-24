import styled from 'styled-components';

export const Cart = styled.div`
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40%;
  background: ${(props) => props.theme.palette.secondary.main};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
`;
