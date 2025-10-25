import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3010/api',
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json')
    return headers
  },
})
