import styled, { css } from 'styled-components';
import hiddenVisually from '../../styles/hidden-visually';

export const Label = styled.label<{ isChecked: boolean }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #000;
  background-color: transparent;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 1;
  cursor: pointer;

  ${(props) =>
    props.isChecked &&
    css`
      background-color: ${props.theme.palette.common.black};
      color: ${props.theme.palette.common.white};
    `}
`;

export const Input = styled.input`
  ${hiddenVisually};
`;
