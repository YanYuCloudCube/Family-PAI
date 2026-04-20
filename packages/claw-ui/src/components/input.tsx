/**
 * @file Input Component
 * @description 输入框组件
 * @module @claw-ai/ui/components
 */

import React, { forwardRef } from 'react'
import { classNames } from '../core/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="claw-input-wrapper">
        {label && (
          <label htmlFor={inputId} className="claw-input__label">
            {label}
          </label>
        )}
        <div className="claw-input-container">
          {leftIcon && <span className="claw-input__icon claw-input__icon--left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={classNames(
              'claw-input',
              error && 'claw-input--error',
              leftIcon && 'claw-input--has-left-icon',
              rightIcon && 'claw-input--has-right-icon',
              className
            )}
            {...props}
          />
          {rightIcon && <span className="claw-input__icon claw-input__icon--right">{rightIcon}</span>}
        </div>
        {error && <span className="claw-input__error">{error}</span>}
        {helperText && !error && <span className="claw-input__helper">{helperText}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
