/**
 * @file Layout Components
 * @description 布局组件
 * @module @claw-ai/ui/components
 */

import React from 'react'
import { classNames } from '../core/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Container({
  children,
  maxWidth = 'lg',
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={classNames(
        'claw-container',
        `claw-container--${maxWidth}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
}

export function Stack({
  children,
  direction = 'column',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={classNames(
        'claw-stack',
        `claw-stack--${direction}`,
        `claw-stack--spacing-${spacing}`,
        `claw-stack--align-${align}`,
        `claw-stack--justify-${justify}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 'none' | 'sm' | 'md' | 'lg'
}

export function Grid({
  children,
  cols = 3,
  gap = 'md',
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={classNames(
        'claw-grid',
        `claw-grid--cols-${cols}`,
        `claw-grid--gap-${gap}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
