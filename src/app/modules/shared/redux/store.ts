import { combineReducers, AnyAction } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from 'app/modules/product/redux/product.slice';
import cartSlice from 'app/modules/cart/redux/cart.slice';

const rootReducer = combineReducers({
  products: productSlice.reducer,
  cart: cartSlice.reducer,
});
const reducerWithPersist = persistReducer(
  { key: 'root', version: 1, storage },
  rootReducer,
);

export type ApplicationActions = AnyAction;

const store = configureStore({
  reducer: reducerWithPersist,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    thunk,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);

export default store;
