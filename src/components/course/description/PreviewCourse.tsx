import React from 'react'
import { useTranslation } from 'react-i18next'
import PlayerCustom from '../../../ui/player/PlayerCustom'
import { Typography } from '../../../ui/Typography'
import DescriptionForCourse from './DescriptionForCourse'
import LeftSidePreview from './LeftSidePreview'
import styles from './PreviewCourse.module.scss'
import RightSidePreview from '../ownerAvatar/RightSidePreview'

type Props = {}

const PreviewCourse = (props: Props) => {
  const { t } = useTranslation('')
  return (
    <div className={styles.container}>
      <div>
        <LeftSidePreview />
      </div>
      <div>
        <RightSidePreview />
      </div>
    </div>
  )
}

export default PreviewCourse
