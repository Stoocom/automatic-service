import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '@/shared/api/base-api'

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery,
  tagTypes: ['Categories'],
  endpoints: builder => ({
    getCategories: builder.query<string[], void>({
      query: () => 'products/categories', // если не нужны параметры
    }),
  }),
})

export const {
  useGetCategoriesQuery,
} = categoriesApi
