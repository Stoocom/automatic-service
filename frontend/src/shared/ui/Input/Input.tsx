import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, variant = 'primary', disabled, className = '', ...props },
    ref,
  ) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label
            htmlFor={props.id}
            className={styles.label}
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={clsx(
            error ? styles.errorInput : styles.input,
            styles[variant],
            disabled && styles.disabled,
            className,
          )}
          {...props}
        />

        {error && (
          <p className={styles.error} title={error}>{error}</p>
        )}
      </div>
    );
  },
);
