import type { FC, PropsWithChildren, ReactNode } from 'react';
import { useEffect, useRef } from 'react'
import clsx from 'clsx';

import styles from './Modal.module.scss'

interface ModalProps {
  children: ReactNode
  onClose: () => void
  className?: string
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, onClose, className }): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog)
      return;

    if (children) {
      if (!dialog.open)
        dialog.showModal()
    }
    else {
      if (dialog.open)
        dialog.close()
    }
  }, [children])

  useEffect(() => { // добавление нативного слушателя <dialog> – close
    const dialog = dialogRef.current;
    if (!dialog)
      return

    const handleClose = () => onClose();

    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  useEffect(() => { // слушатель для клика вне контента модалки
    const dialog = dialogRef.current;
    if (!dialog)
      return;

    const handleClickOutside = (event: PointerEvent) => {
      if (event.target === dialog) {
        dialog.close();
      }
    }

    dialog.addEventListener('pointerdown', handleClickOutside)
    return () => dialog.removeEventListener('pointerdown', handleClickOutside)
  }, [])

  return (
    <dialog ref={dialogRef}>
      <div className={clsx(styles.modalContent, className)}>
        {children}
      </div>
    </dialog>
  )
}
