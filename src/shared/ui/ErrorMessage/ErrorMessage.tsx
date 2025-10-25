import type { FC } from 'react';
import clsx from 'clsx';

import { Button } from '../Button/Button';
import { Typography } from '../Typography';
import type { Action } from './model/types';

import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  message?: string
  onRetry?: () => void
  className?: string
  errorTitle?: string
  buttonTitle?: string
  actions?: Action[] | []
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
  message,
  onRetry,
  errorTitle = 'Произошла ошибка',
  className = '',
  buttonTitle = 'Перезагрузить',
  actions,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <Typography tagName='h1' size='large-xl' weight='bold'>
        {errorTitle}
      </Typography>
      <Typography variant='grey'>
        {message}
      </Typography>
      {
        actions && actions.length > 0
          ? (
              <div className={clsx(styles.marginTop, styles.buttonsGroup)}>
                {actions.map(({ label, onClick, variant }: Action) => (
                  <Button key={label} variant={variant} className={styles.button} onClick={onClick}>
                    {label}
                  </Button>
                ))}
              </div>
            )
          : (
              <Button variant='primary' className={styles.marginTop} onClick={onRetry && onRetry}>
                {buttonTitle}
              </Button>
            )
      }
    </div>
  )
};
