import React from 'react';
import { waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { PRODUCTS } from 'app/modules/shared/enums/api';
import App from 'app/App';
import { ProductDTO } from 'app/modules/product/dto/ProductDTO';
import * as productSelectors from '../helpers/product.selectors';
import * as cartSelectors from '../helpers/cart.selectors';
import render from '../helpers/render';
// To-Do: resolve json import
// eslint-disable-next-line import/extensions
import fixture from './products.fixture.json';

describe('<Home />', () => {
  const mock = new MockAdapter(axios);
  const url = process.env.API_URL as string;
  mock.onGet(`${url}${PRODUCTS}`).reply(200, fixture);

  it('should render product card listing at homepage', async () => {
    render(<App />);

    const productCards = await waitFor(() =>
      productSelectors.selectAllProductCards(),
    );
    expect(productCards.length).toBe(fixture.items.length);
  });

  it('should add product packs to the cart', async () => {
    render(<App />);

    const [product] = fixture.items as ProductDTO[];
    await waitFor(() => productSelectors.selectProductCard(product));

    fireEvent.click(productSelectors.selectProductPack(product, 2));
    fireEvent.click(productSelectors.selectAddToCartButton(product));
    fireEvent.click(cartSelectors.selectOpenCartButton());

    await waitFor(cartSelectors.selectCartContainer);
    const cartItem = await waitFor(() => cartSelectors.selectCartItem(product));

    expect(cartItem).toBeDefined();
  });
});
