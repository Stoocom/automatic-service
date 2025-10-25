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
      providesTags: ['Products'],
    }),
    getProductById: builder.query<ProductType, number>({
      query: id => `products/${id}`,
      providesTags: ['Product'],
    }),
    addProduct: builder.mutation<Product, Product>({
      query: newPost => ({
        url: 'products',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products', 'Product'],
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useLazyGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi
