/** @format */

import React, { FC } from 'react'
import clx from 'classnames'
// @ts-ignore:next-line
import styles from './ProgresBarForm.module.scss'
//
import { AiFillBook, AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdOutlinePlayLesson, MdPayment } from 'react-icons/md'
import { useMultiForm } from '../../../../../hooks/useMultiForm'
import { useAppSelector } from '../../../../../hooks/useReduxHooks'
import { Typography } from '../../../../../ui/Typography'
import { useTranslation } from 'react-i18next'
import LayoutForComponent from '../../../../../ui/layout/LayoutForComponent'

type Props = {}

const ProgressBarForm: FC<{ page: number }> = ({ page }) => {
  console.log(page)
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('myCourses')
  const switchPage = () => {
    if (page === 1) {
      return styles.step1
    }
    if (page === 2) {
      return styles.step2
    }
    if (page === 3) {
      return styles.step3
    }
    if (page === 4) {
      return styles.step4
    }
  }

  const number = 1

  return (
    <LayoutForComponent small>
      <div className={styles.container}>
        <ul className={switchPage()}>
          <li className={`${page === 1 || 2 ? styles.active : ''}`}>
            <span>
              <AiFillBook size={30} />
            </span>
          </li>
          <li className={`${page === 1 ? '' : styles.active}`}>
            <span>
              <AiOutlineQuestionCircle size={30} />
            </span>
          </li>
          <li className={`${page === 3 || (page === 4 && styles.active)}`}>
            <span>
              <MdOutlinePlayLesson size={30} />
            </span>
          </li>
          <li className={`${page === 4 && styles.active}`}>
            <span>
              <MdPayment size={30} />
            </span>
          </li>
        </ul>
        <div className='flex justify-between px-2'>
          <Typography type='Ag-18-semibold'>{t('createCourse')}</Typography>
          <Typography type='Ag-18-semibold' className='mr-8'>
            {t('descriptionOfQuestions')}
          </Typography>
          <Typography type='Ag-18-semibold' className='mr-20'>
            {t('addLesson')}
          </Typography>
          <Typography type='Ag-18-semibold' className='mr-2'>
            {t('payment')}
          </Typography>
        </div>
      </div>
    </LayoutForComponent>
  )
}

export default ProgressBarForm
