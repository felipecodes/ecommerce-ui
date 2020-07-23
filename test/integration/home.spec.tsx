import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { PRODUCTS } from 'app/modules/shared/enums/api';
import App from 'app/App';
import render from '../helpers/render';
// To-Do: resolve json import
// eslint-disable-next-line import/extensions
import fixture from './products.fixture.json';

describe('<Home />', () => {
  it('should render product card listing at homepage', async () => {
    const mock = new MockAdapter(axios);
    const url = process.env.NODE_ENV as string;
    mock.onGet(`${url}${PRODUCTS}`).reply(200, fixture);

    render(<App />);

    const productCards = await waitFor(() =>
      screen.getAllByTestId('product-card'),
    );
    expect(productCards.length).toBe(fixture.items.length);
  });

  // it('should add product packs to the cart', () => {});
});
