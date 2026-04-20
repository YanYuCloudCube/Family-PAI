/**
 * @file Card Component
 * @description 卡片组件
 * @module @claw-ai/ui/components
 */

import React from 'react'
import { classNames } from '../core/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={classNames(
        'claw-card',
        `claw-card--${variant}`,
        `claw-card--padding-${padding}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={classNames('claw-card__header', className)} {...props}>
      {children}
    </div>
  )
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div className={classNames('claw-card__body', className)} {...props}>
      {children}
    </div>
  )
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div className={classNames('claw-card__footer', className)} {...props}>
      {children}
    </div>
  )
}

export default Card
