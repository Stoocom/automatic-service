import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import styles from './index.module.scss';

export const RootLayout: React.FC = () => {
  return (
    <div className={styles.body}>
      <Header />
      <main>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
