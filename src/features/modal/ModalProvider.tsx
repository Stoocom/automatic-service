import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from '@/shared/ui/Modal';

import type { ModalState } from './modalContext';
import { ModalContext } from './modalContext';

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<ModalState>({ node: null });

  const open = useCallback(({ node, className }: { node: ReactNode, className?: string }) => {
    setModalState({ node, className });
  }, []);

  const close = useCallback(() => {
    setModalState({ node: null });
  }, []);

  const contextValue = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {modalState.node
        && createPortal(
          <Modal onClose={close} className={modalState.className}>
            {modalState.node}
          </Modal>,
          document.body,
        )}
    </ModalContext.Provider>
  );
}
