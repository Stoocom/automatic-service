import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

export interface ModalState {
  node: ReactNode | null
  className?: string
}

export interface ModalContextProps {
  open: (params: { node: ReactNode, className?: string }) => void
  close: () => void
}

export const ModalContext = createContext<ModalContextProps | null>(null);

export function useModal(): ModalContextProps {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error('ModalProvider is missing');
  return context;
}
