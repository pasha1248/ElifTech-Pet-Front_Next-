import { Input } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Description from '../../../../../../../../components/myCourses/createCourse/createCourseForm/steps/elementForStep1/Description'
import LabelForField from '../../../../../../../../components/myCourses/createCourse/createCourseForm/steps/elementForStep1/LabelForField'
import UploadPhoto from '../../../../../../../../components/myCourses/createCourse/createCourseForm/steps/elementForStep1/UploadPhoto'
import { useAppSelector } from '../../../../../../../../hooks/useReduxHooks'
import LayoutForComponent from '../../../../../../../../ui/layout/LayoutForComponent'
import styles from './AddLessonForm.module.scss'
import cn from 'classnames'
import AddVideoFromYoutube from './components/AddVideoFromYoutube'

type Props = {}

const AddLessonForm = (props: Props) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('addLesssons')
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div>
          <LabelForField label='lessonName'></LabelForField>
          <div className={cn(styles.input, { [styles.dark]: themeDark })}>
            <input placeholder={`${t('whatIsDesign?')}`} />
          </div>
        </div>

        <Description long />
      </div>
      <div className={styles.rightSide}>
        <AddVideoFromYoutube />
        <div>
          <UploadPhoto />
        </div>
      </div>
    </div>
  )
}

export default AddLessonForm
