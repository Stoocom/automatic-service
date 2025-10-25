import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';

import { categoriesApi } from '@/features/categories/api/categories-api';
import { productsApi } from '@/features/products/api/products-api';

import productsSlice from './slices/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      categoriesApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
