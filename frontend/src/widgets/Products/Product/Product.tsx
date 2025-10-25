import type { FC } from 'react';
import { Link } from 'react-router-dom';

import type { ProductType } from '@/shared/types/products';
import { Typography } from '@/shared/ui/Typography';

import styles from './Product.module.scss';

export const Product: FC<ProductType> = ({ id, image, title, price, category, rating }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={image}></img>
        <div>
          <Typography tagName='h2' weight='semi-bold'>
            Title:
            {' '}
            {title}
          </Typography>
          <Typography>
            Price:
            {' '}
            {price}
          </Typography>
          <Typography>
            Category:
            {' '}
            {category}
          </Typography>
          <Typography>
            Rating rate:
            {' '}
            {rating?.rate}
          </Typography>
        </div>
      </div>
    </Link>

  );
};
