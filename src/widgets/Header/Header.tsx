import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@/shared/ui/Typography';

import styles from './Header.module.scss';

interface HeaderProps {
  showRightBlock?: boolean
}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Typography weight='semi-bold' className={styles.logo}>Products Shop</Typography>

        <nav className={styles.right_block}>
          <Link className={styles.link} to='/signup'>
            Зарегистрироваться
          </Link>
          <Link className={styles.link} to='/login'>
            Войти
          </Link>
        </nav>

      </div>
    </div>
  );
};
