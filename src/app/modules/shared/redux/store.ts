import {
  combineReducers,
  AnyAction,
} from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from 'app/modules/product/product.redux';

const rootReducer = combineReducers({ product: productReducer });
const reducerWithPersist = persistReducer({ key: 'root', storage }, rootReducer);

export type ApplicationActions = AnyAction;

const store = configureStore({
  reducer: reducerWithPersist,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
    thunk
  ]
})

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store);

export default store;
