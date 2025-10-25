import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '@/shared/api/base-api'
import type { Product, ProductType } from '@/shared/types/products'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery,
  tagTypes: ['Products', 'Product'],
  endpoints: builder => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => 'products',
    }),
    addProduct: builder.mutation<Product, Product>({
      query: newPost => ({
        url: 'products/add',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: prod => ({
        url: `products/update`,
        method: 'PUT',
        body: prod,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `products/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi
