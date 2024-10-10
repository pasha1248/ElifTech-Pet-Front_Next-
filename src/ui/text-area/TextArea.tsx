/** @format */

import React, {
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
// @ts-ignore: next-line
import styles from './TextArea.module.scss'
import { ITextArea } from './text-area.interface'
import dynamic from 'next/dynamic'
import cn from 'classnames'
//import foo from '../foo.js';
const SimpleMdeReact = dynamic(import('react-simplemde-editor'), { ssr: false })

import 'easymde/dist/easymde.min.css'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks/useReduxHooks'

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ error, style, onChange, long, withEditor, description, ...rest }, ref) => {
    const [value, setValue] = useState(description)
    const [render, setRender] = useState(false)

    const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

    const { t } = useTranslation('myCourses')

    const handleChange = useCallback(
      (value: string) => {
        setValue(value)
        onChange(value)
      },
      [onChange]
    )

    const autofocusNoSpellcheckerOptions = useMemo(() => {
      return {
        autofocus: true,
        spellChecker: false,
        maxHeight: '400px',
        placeholder: 'text....',
        status: false,
      }
    }, [])

    useEffect((): any => {
      if (withEditor) {
        setRender(true)
      }
    }, [withEditor])

    return (
      <div className={styles['editor']} style={style}>
        {render ? (
          <SimpleMdeReact
            className={cn(error ? styles.errorBorder : styles.editorCas, {
              [styles.dark]: themeDark,
              [styles.longVersion]: long,
            })}
            options={autofocusNoSpellcheckerOptions}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <textarea ref={ref} {...rest} />
        )}
        {error && <div className={styles.error}>{t(error)}</div>}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
export default TextArea
