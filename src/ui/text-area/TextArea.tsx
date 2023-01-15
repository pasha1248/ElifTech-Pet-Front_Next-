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
//import foo from '../foo.js';
const SimpleMdeReact = dynamic(import('react-simplemde-editor'), { ssr: false })

import 'easymde/dist/easymde.min.css'

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ error, style, withEditor, ...rest }, ref) => {
    const [value, setValue] = useState('Initial')
    const [render, setRender] = useState(false)

    const onChange = useCallback((value: string) => {
      setValue(value)
    }, [])

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
    }, [])

    return (
      <div className={styles['editor']} style={style}>
        {render ? (
          <SimpleMdeReact
            className={styles.editorCas}
            options={autofocusNoSpellcheckerOptions}
            value={value}
            onChange={onChange}
          />
        ) : (
          <textarea ref={ref} {...rest} />
        )}
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)
export default TextArea
