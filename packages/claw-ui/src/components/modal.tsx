/**
 * @file Modal Component
 * @description 模态框组件
 * @module @claw-ai/ui/components
 */

import React, { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { classNames } from '../core/utils'
import { useClickOutside } from '../core/hooks'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  children: React.ReactNode
}

export function Modal({
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  children,
}: ModalProps) {
  const modalRef = React.useRef<HTMLDivElement>(null)

  useClickOutside(modalRef, () => {
    if (closeOnOverlayClick) {
      onClose()
    }
  })

  useEffect(() => {
    if (!closeOnEscape) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, closeOnEscape])

  if (!isOpen) return null

  return createPortal(
    <div className="claw-modal-overlay">
      <div
        ref={modalRef}
        className={classNames('claw-modal', `claw-modal--${size}`)}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <div className="claw-modal__header">
            <h2 className="claw-modal__title">{title}</h2>
            <button
              className="claw-modal__close"
              onClick={onClose}
              aria-label="关闭"
            >
              ×
            </button>
          </div>
        )}
        <div className="claw-modal__body">{children}</div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
