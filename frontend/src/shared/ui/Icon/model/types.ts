import type { SVGProps } from 'react';

export type IconName
  = | 'logo'
    | 'close'
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'twitter'
    | 'mail'
    | 'phone'
    | 'star'
    | 'right-arrow'
    | 'left-arrow'
    | 'move-left'
    | 'move-right'
    | 'service'
    | 'star'
    | 'search'
    | 'edit'
    | 'delete'
    | 'left-single'
    | 'left-double'
    | 'right-single'
    | 'right-double'
    | 'main'
    | 'account'
    | 'application'
    | 'loan'
    | 'document'
    | 'employee'
    | 'bank_statement'
    | 'create_payment'
    | 'issue_invoice'
    | 'top_up_account'
    | 'add_employee'
    | 'add_contract'
    | 'apply_loan'
    | 'ruble'
    | 'plus'
    | 'star'
    | 'notifications'
    | 'profile'
    | 'company-data'
    | 'close'
    | 'exit'
    | 'eye'
    | 'hidden-eye'
    | 'calendar-left-arrow'
    | 'calendar-right-arrow'
    | 'calendar-icon';
;

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  width?: number | string
  height?: number | string
  className?: string
}
