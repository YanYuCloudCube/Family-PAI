/**
 * @file Button Component
 * @description 基础按钮组件
 * @module @claw-ai/ui/components
 */

import React from 'react'
import { classNames } from '../core/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'claw-button',
        `claw-button--${variant}`,
        `claw-button--${size}`,
        loading && 'claw-button--loading',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="claw-button__spinner" />}
      {leftIcon && <span className="claw-button__icon claw-button__icon--left">{leftIcon}</span>}
      <span className="claw-button__content">{children}</span>
      {rightIcon && <span className="claw-button__icon claw-button__icon--right">{rightIcon}</span>}
    </button>
  )
}

export default Button
