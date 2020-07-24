import { screen } from '@testing-library/react';
import { ProductDTO } from 'app/modules/product/dto/ProductDTO';

export const selectOpenCartButton = (): HTMLElement =>
  screen.getByTestId('open-cart-button');

export const selectCartContainer = (): HTMLElement =>
  screen.getByTestId('cart-container');

export const selectCartItem = ({ uuid }: ProductDTO): HTMLElement =>
  screen.getByTestId(`${uuid}-cart-item`);
