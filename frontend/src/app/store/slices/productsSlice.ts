import { createSlice } from '@reduxjs/toolkit'

import type { ProductType } from '../../../shared/types/products';

export interface ProductState {
  products: ProductType[]
}

const initialState: ProductState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveProducts: (state, action) => {
      state.products = action.payload;
    },
  },
})

export const { saveProducts } = productsSlice.actions
export default productsSlice.reducer
