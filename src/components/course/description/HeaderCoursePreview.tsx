import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import RateIconComplexity1 from '../../../ui/icon/RateIconComplexity1'
import RateIconComplexity2 from '../../../ui/icon/RateIconComplexity2'
import RateIconComplexity3 from '../../../ui/icon/RateIconComplexity3'
import RatingStars from '../../../ui/rating/RatingStars'
import { Typography } from '../../../ui/Typography'
import ButtonForPay from './ButtonForPay'
import styles from './PreviewCourse.module.scss'

type Props = {}

const HeaderCoursePreview = (props: Props) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  let icon = 'complexity3'
  const { t } = useTranslation('course')
  return (
    <div className={styles.header}>
      <div>
        {' '}
        <Typography className='text-start text-3xl font-bold' type='h3'>
          Name this course
        </Typography>
        <RatingStars rate={5} />
        <Typography type='Ag-18-semibold'>4032 {t('students')}</Typography>
        <div
          className={`flex w-min justify-center	 gap-2 items-center p-1 px-2 ${
            !themeDark ? 'bg-gray-100' : 'bg-[#1C1D1F]'
          } rounded-3xl`}
        >
          <Typography type='Ag-13-medium' className='text-sm font-bold'>
            {t('complexity3')}
          </Typography>
          <div>
            {icon === 'complexity1' && <RateIconComplexity1 />}
            {icon === 'complexity3' && <RateIconComplexity3 />}
            {icon === 'complexity2' && <RateIconComplexity2 />}
          </div>
        </div>
      </div>
      <ButtonForPay />
    </div>
  )
}

export default HeaderCoursePreview
