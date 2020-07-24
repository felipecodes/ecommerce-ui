import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from 'app/modules/shared/redux/store';
import { CartStateDTO } from '../dto/CartDTO';
import addToCart from './operations/addToCart';

const cartAdapter = createEntityAdapter<CartStateDTO>({
  selectId: (product) => product.uuid,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state, action) => {
      cartAdapter.upsertOne(state, action.payload);
    });
  },
});

export const cartSelectors = cartAdapter.getSelectors<RootState>(
  (state) => state.cart,
);

export default cartSlice;
