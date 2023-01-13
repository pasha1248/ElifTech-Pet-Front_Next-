/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { useMultiForm } from '../../../hooks/useMultiForm'
import { Typography } from '../../../ui/Typography'
import ProgressBarForm from './createCourseForm/progressBarForForm/ProgressBarForm'
import Step1General from './createCourseForm/steps/Step1General'
import Step2Lessons from './createCourseForm/steps/Step2Lessons'
import Step3Payment from './createCourseForm/steps/Step3Payment'

interface Props {}

const CreateCourseMail = (props: Props) => {
  const { decrement, increment, page, totalPage, changePage } = useMultiForm(3)
  const [photoId, setPhotoId] = React.useState<string[]>([])
  const { t } = useTranslation('myCourses')
  // const [photoUrl, setPhotoUrl] = React.useState<UploadPhotoRespons[] | any>([])

  const [fields, setFields] = React.useState('')

  return (
    <div>
      <Typography type='h2' className='text-2xl'>
        {t('addNewCourse')}
      </Typography>
      <div className='my-4'>
        <ProgressBarForm page={page} />
      </div>

      {page === 1 && (
        <Step1General
          defaultValue={fields}
          setFields={setFields}
          increment={increment}
          decrement={decrement}
        />
      )}
      {/* {page === 2 && (
        <Step2Lessons
          defaultValue={fields}
          setFields={setFields}
          increment={increment}
          decrement={decrement}
        />
      )}
      {page === 3 && (
        <Step3Payment
          photoId={photoId}
          setPhotoId={setPhotoId}
          photoUrl={photoUrl}
          setPhotoUrl={setPhotoUrl}
          defaultValue={fields}
          clearDefault={setFields}
          increment={increment}
          decrement={decrement}
          changePage={changePage}
        />
      )} */}
    </div>
  )
}

export default CreateCourseMail
