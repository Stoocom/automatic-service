import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import type { ProductState } from '@/app/store/slices/productsSlice';
import { getProductById } from '@/app/store/slices/productsSlice';
import { useDeleteProductMutation } from '@/features/products/api/products-api';
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

  const [deleteProduct, { isSuccess, error }] = useDeleteProductMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  const selectedProduct = useSelector((state: { products: ProductState }) => {
    if (id) {
      return getProductById(state, Number.parseInt(id))
    }
    return undefined
  });

  const openUpdateModal = () => {
    setIsOpenModal(true)
  }

  const close = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const deleteProd = () => {
    deleteProduct(id)
  }

  return (
    <div className={styles.container}>
      <Typography>
        Product
      </Typography>
      {selectedProduct && <Product {...selectedProduct} />}
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
          <ProductForm closeModal={close} currentProduct={selectedProduct} />
        </Modal>
      )}
    </div>
  );
};
