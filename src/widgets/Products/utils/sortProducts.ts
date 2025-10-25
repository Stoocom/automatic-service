import type { ProductType } from '@/shared/types/products';

import type { DirectionOption, SelectOption } from '../model/types';
import { SortStatus } from '../model/types';

export function sortProducts(products: ProductType[], direction: DirectionOption | null, sortBy: SelectOption | null) {
  return [...products].sort((a, b) => {
    let valueA, valueB;

    // Получаем значения для сортировки
    if (sortBy?.value === 'rating') {
      valueA = a.rating.rate;
      valueB = b.rating.rate;
    }
    else if (sortBy?.value === 'price') {
      valueA = a.price;
      valueB = b.price;
    }

    // Определяем направление сортировки
    if (direction?.value === SortStatus.DESC) {
      return valueB! - valueA!;
    }
    return valueA! - valueB!;
  });
}
