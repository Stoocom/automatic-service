import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import errorImage from '@/shared/assets/images/error.png';
import { Button } from '@/shared/ui/Button/Button';
import { Typography } from '@/shared/ui/Typography';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <img src={errorImage} alt='error' width={64} height={64} />
      <Typography tagName='p' variant='secondary'>
        Такой страницы не существует.
        Проверьте адрес или попробуйте вернуться на главную.
      </Typography>
      <Button
        onClick={() => navigate(-1)}
        variant='outlined'
      >
        <Typography tagName='p' variant='secondary'>
          Вернуться назад
        </Typography>
      </Button>
    </div>
  );
};
