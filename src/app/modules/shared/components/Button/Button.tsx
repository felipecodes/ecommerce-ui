import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.palette.primary.main};
  text-transform: uppercase;
  cursor: pointer;
`;

export default Button;
