import React from 'react'
import render from '../helpers/render'
import App from 'app/App';

it('home', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('homepage')).toBeDefined();
});
