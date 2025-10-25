import type { FC } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ModalProvider } from '@/features/modal/ModalProvider';

import { router } from './router';
import { store } from './store/store';

import './styles/_index.scss';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </Provider>
  );
};

export default App;
