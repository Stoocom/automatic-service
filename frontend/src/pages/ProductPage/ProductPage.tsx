import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDeleteProductMutation, useLazyGetProductByIdQuery } from '@/features/products/api/products-api';
import { Button } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { ProductForm } from '@/widgets/ProductForm';
import { Product } from '@/widgets/Products/Product';

import styles from './ProductPage.module.scss';

export const ProductPage: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const [getProduct, { data }] = useLazyGetProductByIdQuery();

  const [deleteProduct, { isSuccess, error }] = useDeleteProductMutation();

  const openUpdateModal = () => {
    setIsOpenModal(true)
  }

  const close = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const deleteProd = () => {
    deleteProduct(id)
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (id) {
      getProduct(+id)
    }
  }, [id, getProduct]);

  return (
    <div className={styles.container}>
      <Typography>
        Product
      </Typography>
      {data && <Product {...data} />}
      {error && (
        <Typography>
          Error of delete
          {' '}
          {error?.toString()}
        </Typography>
      )}
      <div className={styles.left}>
        <Button variant='outlined' className={styles.add} onClick={openUpdateModal}>
          <Icon name='edit' />
        </Button>
        <Button variant='outlined' className={styles.add} onClick={deleteProd}>
          <Icon name='delete' />
        </Button>
      </div>
      { isOpenModal && (
        <Modal onClose={close}>
          <ProductForm closeModal={close} currentProduct={data} />
        </Modal>
      )}
    </div>
  );
};
