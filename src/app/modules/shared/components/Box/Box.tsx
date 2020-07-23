import styled from 'styled-components';
import { ThemeSpacing } from '../../styles/theme';

const Box = styled.div<{ borderRadius: boolean; padding?: ThemeSpacing }>`
  padding: ${({ padding = 'base', ...props }) => props.theme.spacing[padding]};
  box-shadow: ${(props) => props.theme.shadows[0]};
  border-radius: ${(props) =>
    props.borderRadius && props.theme.shape.borderRadius}px;
`;

export default Box;
