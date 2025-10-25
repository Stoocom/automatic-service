import type { FC } from 'react';
import { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

import { useGetCategoriesQuery } from '@/features/categories/api/categories-api';
import { useAddProductMutation, useUpdateProductMutation } from '@/features/products/api/products-api';
import type { Product, ProductType } from '@/shared/types/products';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';

import styles from './ProductForm.module.scss';

interface ProductFormProps {
  closeModal: () => void
  currentProduct?: ProductType
  callback?: (id: string | number) => void
}

export const ProductForm: FC<ProductFormProps> = ({ closeModal, currentProduct, callback }) => {
  const {
    control,
    handleSubmit,
    reset,
  } = useForm<Product>({
    mode: 'onChange',
    defaultValues: {
      title: currentProduct?.title ?? '',
      price: currentProduct?.price.toString() ?? '',
      description: currentProduct?.description ?? '',
      image: currentProduct?.image ?? '',
      category: currentProduct?.category ?? '',
    },
  });

  const { data } = useGetCategoriesQuery();
  const [createProduct, { isSuccess: isAddSuccess, isError: isAddError, error: addError }] = useAddProductMutation();
  const [updateProduct, { isSuccess: isUpdateSuccess, isError: isUpdateError, error: updateError }] = useUpdateProductMutation();

  const isSuccess = isAddSuccess || isUpdateSuccess;
  const isError = isAddError || isUpdateError;
  const error = addError || updateError;

  useEffect(() => {
    if (isSuccess) {
      if (currentProduct) {
        callback && callback(currentProduct.id)
      }
      reset();
      closeModal();
    }
  }, [isSuccess, reset, closeModal]);

  const onSubmit: SubmitHandler<Product> = (
    data: Product,
  ) => {
    if (currentProduct) {
      updateProduct({
        id: currentProduct.id,
        data: { ...data, price: +data.price },
      })
    }
    else {
      createProduct(data);
    }
  };

  const categories = (data || []).map(category => ({
    value: category,
    label: category.charAt(0).toUpperCase() + category.slice(1), // Делаем первую букву заглавной
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {isError && (
        <div className={styles.errorMessage}>
          Error of adding
          {' '}
          {error?.toString()}
        </div>
      )}
      {isSuccess && (
        <div className={styles.successMessage}>
          New Product added!
        </div>
      )}
      <Typography tagName='h2' size='medium' weight='bold'>Ответственное лицо</Typography>
      <Controller
        name='title'
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            type='text'
            label='Title'
            placeholder='title'
            className={styles.input}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name='price'
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            type='text'
            label='Price'
            placeholder='price'
            className={styles.input}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name='description'
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            type='text'
            label='Description'
            placeholder='description'
            className={styles.input}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name='image'
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            type='text'
            label='Image'
            placeholder='image'
            className={styles.input}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name='category'
        control={control}
        render={({ field, fieldState }) => (
          <div className={styles.wrapper}>
            <label>
              Category
            </label>
            <Select
              {...field}
              options={categories}
              placeholder='Choose category...'
              isSearchable
              value={categories.find(option => option.value === field.value) || null}
              onChange={(selectedOption) => {
                field.onChange(selectedOption?.value || '');
              }}
            />
            {fieldState.error && (
              <div className={styles.error}>
                {fieldState.error.message}
              </div>
            )}
          </div>
        )}
      />
      <Button variant='primary' type='submit' className={styles.button}>
        <Typography size='small' variant='white' weight='semi-bold'>{currentProduct ? 'Update product' : 'Add product'}</Typography>
      </Button>
    </form>
  );
};
