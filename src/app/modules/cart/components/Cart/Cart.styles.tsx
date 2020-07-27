import styled from 'styled-components';
import media from 'app/modules/shared/styles/media';

export const Cart = styled.div`
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 85%;
  background: ${(props) => props.theme.palette.secondary.main};

  ${media.md`
    width: 40%;
    min-width: 320px;
    max-width: 520px;
  `}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
`;

const duration = 200;

export const transition = {
  duration,

  defaultCartStyle: {
    transition: 'transform 200ms cubic-bezier(0.55, 0, 0.1, 1)',
    transform: 'translate3d(100%, 0, 0)',
  },

  defaultOverlayStyle: {
    transition: 'opacity 200ms cubic-bezier(0.55, 0, 0.1, 1)',
    opaicty: 0,
  },

  overlayStyle: {
    entering: {
      opacity: 1,
      pointerEvents: 'auto',
    },
    entered: {
      opacity: 1,
      pointerEvents: 'auto',
    },
    exiting: {
      opacity: 0,
      pointerEvents: 'none',
    },
    exited: {
      opacity: 0,
      pointerEvents: 'none',
    },
  },

  cartStyle: {
    entering: {
      transform: 'none',
    },
    entered: {
      transform: 'none',
    },
    exiting: {
      transform: 'translate3d(100%, 0, 0)',
    },
    exited: {
      transform: 'translate3d(100%, 0, 0)',
    },
  },
};
