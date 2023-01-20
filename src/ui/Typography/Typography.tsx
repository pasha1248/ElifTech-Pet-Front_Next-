/** @format */

import clsx from 'clsx'
import React from 'react'
import { useAppSelector } from '../../hooks/useReduxHooks'
import { TypographyStyle } from './Typography.style'
import styles from './Typography.module.scss'

interface TypographyProps {
  type: keyof typeof TypographyStyle
  className?: string
  tagName?: string
  style?: any
  children: React.ReactNode
  onClick?: () => void
}

export const Typography: React.FC<TypographyProps> = ({
  type,
  className,
  tagName,
  children,
  style,
  onClick,
}) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const Tag = (tagName ||
    TypographyStyle[type].defaultTagName) as keyof JSX.IntrinsicElements
  const predefinedClassName = TypographyStyle[type].className

  const colorTheme = () => {
    if (Tag === 'h3' && themeDark) {
      return true
    }
    if (Tag === 'p' && themeDark) {
      return true
    }
    if (Tag === 'h2' && themeDark) {
      return true
    }
    // if (Tag === 'span' && themeDark) {
    //   return true
    // }
    return false
  }

  return (
    <Tag
      className={clsx(predefinedClassName, className, {
        [styles.dark]: colorTheme(),
      })}
      onClick={onClick}
      style={style}
    >
      {children}
    </Tag>
  )
}
