import type { FC } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { useGetProductsQuery } from '@/features/products/api/products-api';
import type { ProductType } from '@/shared/types/products';
import { Button } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';

import { saveProducts } from '../../app/store/slices/productsSlice';
import { ProductForm } from '../ProductForm';
import { DIRECTIONS, OPTIONS } from './constants';
import type { DirectionOption, SelectOption } from './model/types';
import { Product } from './Product/Product';
import { sortProducts } from './utils/sortProducts';

import styles from './Products.module.scss';

export const Products: FC = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(OPTIONS[0]);
  const [directionOption, setDirectionOption] = useState<DirectionOption | null>(DIRECTIONS[0]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { data, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      dispatch(saveProducts(data));
    }
  }, [data, dispatch]);

  const sortedProducts: ProductType[] | undefined = useMemo(() => {
    if (data) {
      return sortProducts(data, directionOption, selectedOption)
    }
    else {
      return []
    }
  }, [data, directionOption, selectedOption]);

  const openAddModal = () => {
    setIsOpenModal(true);
  }

  const close = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  if (isLoading) {
    return <Typography>isLoading</Typography>
  }

  return (
    <>
      <div className={styles.filter}>
        <Typography>ProductList</Typography>
        <div className={styles.sort}>
          <Typography>sorting by </Typography>
          <Select
            value={selectedOption}
            onChange={setSelectedOption}
            options={OPTIONS}
            placeholder='Категория'
            isSearchable
            defaultValue={OPTIONS[0]}
          />
          <Typography>with </Typography>
          <Select
            value={directionOption}
            onChange={setDirectionOption}
            options={DIRECTIONS}
            placeholder='Категория'
            isSearchable
            defaultValue={DIRECTIONS[0]}
          />
        </div>
      </div>
      <div className={styles.right}>
        <Button variant='primary' className={styles.add} onClick={openAddModal}>
          <Typography variant='white'>Add product</Typography>
        </Button>
      </div>
      <div className={styles.container}>
        {
          (sortedProducts && sortedProducts.length > 0)
            ? sortedProducts.map((product: ProductType) => {
                return <Product key={product.id} {...product} />
              })
            : <div>Products list is empty</div>
        }
      </div>
      { isOpenModal && (
        <Modal onClose={close}>
          <ProductForm closeModal={close} />
        </Modal>
      )}
    </>
  );
};
