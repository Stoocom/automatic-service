import { forwardRef } from 'react';
import clsx from 'clsx';

import type { ButtonVariants } from './model/types';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  className?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'secondary', disabled, children, className, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className={clsx(
          styles.button,
          styles[variant],
          disabled && styles.disabled,
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
