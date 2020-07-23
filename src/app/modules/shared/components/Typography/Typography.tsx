import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const commonHeadingStyles = css`
  font-weight: bold;
  line-height: 1;
`;

const TYPOGRAPHY_VARIANT_MAP = {
  h1: css`
    ${commonHeadingStyles}
    font-size: 1.5rem;
  `,

  h2: css`
    ${commonHeadingStyles}
    font-size: 1.2rem;
  `,

  h3: css`
    ${commonHeadingStyles}
    font-size: 1rem;
  `,

  h4: css`
    ${commonHeadingStyles}
    font-size: 0.8rem;
  `,

  h5: css`
    ${commonHeadingStyles}
    font-size: 0.7rem;
  `,

  body: css`
    font-size: 0.8rem;
    line-height: 1.5;
  `,

  p: css`
    line-height: 1;
    font-size: 1rem;
  `,
};

type TypographyComponent =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'body';
type Color = 'primary' | 'secondary';
type FontWeight = 'normal' | 'bold';

const Text = styled.p<{
  variant: TypographyVariant;
  fontWeight?: FontWeight;
  contrastText?: boolean;
  className?: string;
  color?: Color;
}>`
  ${(props) =>
    TYPOGRAPHY_VARIANT_MAP[props.variant] as FlattenSimpleInterpolation}

  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `};

  color: ${(props) => {
    if (props.color && props.contrastText) {
      return props.theme.palette[props.color].contrastText;
    }

    return props.color
      ? props.theme.palette.text[props.color]
      : props.theme.palette.text.primary;
  }};
`;

const Typography: React.FC<{
  component?: TypographyComponent;
  variant?: TypographyVariant;
  contrastText?: boolean;
  fontWeight?: FontWeight;
  className?: string;
  color?: Color;
}> = ({ children, component = 'p', variant = 'p', ...props }) => (
  <Text as={component} variant={variant} {...props}>
    {children}
  </Text>
);

export default Typography;
