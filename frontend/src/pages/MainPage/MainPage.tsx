import type { FC } from 'react';

import { Products } from '@/widgets/Products';

import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  return (
    <div className={styles.container}>
      <Products />
    </div>
  );
};
