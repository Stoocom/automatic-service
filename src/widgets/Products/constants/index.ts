import type { DirectionOption, SelectOption } from '../model/types';
import { SortStatus } from '../model/types';

export const TAB_STEP_PAGINATION = 8;

export const STATUSES: Record<string, string> = {
  active: 'Активный',
  blocked: 'Заблокирован',
}

export const VARIANT_STATUSES: Record<string, string> = {
  active: 'white',
  blocked: 'default',
}

export const OPTIONS: SelectOption[] = [
  { value: 'price', label: 'price' },
  { value: 'rating', label: 'rating' },
];

export const DIRECTIONS: DirectionOption[] = [
  { value: SortStatus.DESC, label: 'desc' },
  { value: SortStatus.ASC, label: 'asc' },
];
