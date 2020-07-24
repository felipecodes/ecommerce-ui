/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import currencyFormatter from 'app/modules/shared/utils/currency-formatter';
import { RootState } from 'app/modules/shared/redux/store';
import { ProductStateDTO, PackState } from '../dto/ProductDTO';
import fetchProducts from './operations/fetchProducts';

export const productAdapter = createEntityAdapter<ProductStateDTO>({
  selectId: (product) => product.uuid,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const productSlice = createSlice({
  name: 'products',
  initialState: productAdapter.getInitialState<{
    loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string;
  }>({
    loading: 'idle',
    error: '',
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = 'pending';
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = 'fulfilled';
      productAdapter.setAll(state, action.payload);
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = action.error.message ?? '';
    });
  },
});

export const productSelectors = productAdapter.getSelectors<RootState>(
  (state) => state.products,
);

export const productPackDiscountSelector = (
  pack: PackState,
): { discount: string; unitaryPrice: string } => {
  const discountPercent = 100 - (pack.currentPrice / pack.originalPrice) * 100;
  return {
    discount: `${currencyFormatter(discountPercent)}%`,
    unitaryPrice: `R$ ${currencyFormatter(pack.unities / pack.currentPrice)}`,
  };
};

export default productSlice;
