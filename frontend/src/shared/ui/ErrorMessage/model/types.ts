import type { ButtonVariants } from '@/shared/ui/Button/model/types'

export interface Action {
  label: string
  onClick: () => void
  variant: ButtonVariants
}
