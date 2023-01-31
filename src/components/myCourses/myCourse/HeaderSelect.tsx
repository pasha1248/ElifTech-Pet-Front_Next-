import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../ui/Typography'
import styles from './HeaderSelect.module.scss'
import cn from 'classnames'

type Props = {
  onNextStep: any
  step: number
}

const dataForSelect = [
  { title: 'available', id: 1 },
  { title: 'created', id: 2 },
  { title: 'active', id: 3 },
]

const HeaderSelect = ({ onNextStep, step }: Props) => {
  const { t } = useTranslation('myCourses')

  return (
    <div>
      <LayoutForComponent classNames='border-4 rounded-3xl	border-yellow-400 border-solid	'>
        <div className=''>
          <ul className={styles.container}>
            {dataForSelect.map((el) => (
              <li
                onClick={() => onNextStep(el.id)}
                key={el.id}
                className={cn(styles.itemSelect, {
                  [styles.active]: step === el.id,
                })}
              >
                <Typography type='h3'>{t(el.title)}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </LayoutForComponent>
    </div>
  )
}

export default HeaderSelect
