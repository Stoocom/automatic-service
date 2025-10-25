import { createBrowserRouter } from 'react-router-dom';

import { MainPage, NotFoundPage, ProductPage } from '@/pages';

import { RootLayout } from '../layout/root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
