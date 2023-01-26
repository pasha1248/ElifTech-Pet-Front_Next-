import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import PlayerCustom from '../../../ui/player/PlayerCustom'
import { Typography } from '../../../ui/Typography'
import DescriptionForCourse from '../description/DescriptionForCourse'
import OwnerDescription from './OwnerDescription'
import styles from './PreviewCourse.module.scss'
import ReviewsCourse from './ReviewsCourse'

type Props = {}

const RightSidePreview = (props: Props) => {
  const { t } = useTranslation('course')
  return (
    <div>
      <Typography className='text-xl text-start' type='h3'>
        Owner
      </Typography>
      <LayoutForComponent>
        <OwnerDescription />
      </LayoutForComponent>
      <Typography type='h3' className='my-2 text-start text-xl'>
        {t('courseRating')}
      </Typography>
      <ReviewsCourse />
    </div>
  )
}

export default RightSidePreview
