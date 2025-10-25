import type { FC, ReactNode } from 'react';

import type { Styles, Variants } from './model/types';

import styles from './Typography.module.scss';

type TypographyProps = {
  children?: ReactNode
  className?: string
} & Variants & Styles

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  tagName = 'p',
  variant = 'default',
  size = 'medium',
  weight = 'regular',
}) => {
  const Tag = tagName;

  return (
    <Tag className={`${styles[variant]} ${styles[size]} ${styles[weight]} ${className ?? ''}`}>
      {children}
    </Tag>
  );
};
