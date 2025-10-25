export enum SortStatus {
  ASC = 'asc',
  DESC = 'desc',
}

export type SortBy = 'price' | 'rating';

export interface SelectOption {
  value: SortBy
  label: string
}

export interface DirectionOption {
  value: SortStatus
  label: string
}
