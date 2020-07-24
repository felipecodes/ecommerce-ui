import { screen } from '@testing-library/react';
import { ProductDTO } from 'app/modules/product/dto/ProductDTO';

export const selectAllProductCards = (): HTMLElement[] =>
  screen.getAllByTestId(/product-card/);

export const selectProductCard = ({ uuid }: ProductDTO): HTMLElement =>
  screen.getByTestId(`${uuid}-product-card`);

export const selectProductPack = (
  product: ProductDTO,
  packNumber: number,
): HTMLElement =>
  screen.getByTestId(`${product.uuid}-product-pack-${packNumber}`);

export const selectAddToCartButton = (product: ProductDTO): HTMLElement =>
  screen.getByTestId(`${product.uuid}-add-to-cart-button`);
