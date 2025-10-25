import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalType {
  children: ReactNode
  element?: HTMLElement
}

export function WithPortal({ children, element = document.body }: PortalType) {
  return createPortal(children, element)
}
