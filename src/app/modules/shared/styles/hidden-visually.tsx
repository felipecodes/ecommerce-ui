import { css } from 'styled-components';

const hiddenVisually = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  pointer-events: none;
`;

export default hiddenVisually;
