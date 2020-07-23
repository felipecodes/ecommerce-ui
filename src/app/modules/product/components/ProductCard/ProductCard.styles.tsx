import styled from 'styled-components';
import ellipsis from 'app/modules/shared/styles/ellipsis';

export const Card = styled.div`
  position: relative;
`;

export const Image = styled.img`
  display: block;
  margin-right: auto;
  margin-bottom: 2rem;
  margin-left: auto;
  max-width: 100%;
  max-height: 150px;
`;

export const Name = styled.div`
  text-transform: uppercase;
  margin-bottom: 0.25rem;
  ${ellipsis}
`;

export const Description = styled.div`
  margin-bottom: 1rem;
  ${ellipsis}
`;

export const PackTitle = styled.div`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const Packs = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const Pack = styled.div`
  margin-right: 0.5rem;
  text-transform: uppercase;
`;

export const Price = styled.p`
  margin-bottom: 1rem;
`;

export const Discount = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${(props) => props.theme.palette.primary.main};
  text-transform: uppercase;
`;
