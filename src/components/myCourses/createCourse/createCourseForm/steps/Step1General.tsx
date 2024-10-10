/** @format */

import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import BigInput from './bitInput/BigInput'
import Selectors from './elementForStep1/Selectors'
import SelectLevel from './elementForStep1/SelectLevel'
import Description from './elementForStep1/Description'
import UploadPhoto from './elementForStep1/UploadPhoto'
import { useTranslation } from 'react-i18next'
import { BsArrowRightShort } from 'react-icons/bs'
import { IFormAboutCourseStep1 } from './stepTypes'
import { useAppSelector } from '../../../../../hooks/useReduxHooks'
import { FaLessThanEqual } from 'react-icons/fa'

interface Props {
  defaultValue: any
  setFields: any
  increment: any
  decrement: any
}

const Step1General = ({
  defaultValue,
  setFields,
  increment,
  decrement,
}: Props) => {
  const { t } = useTranslation('myCourses')

  const {
    name,
    level,
    category,
    description,
    uploadDataPhoto,
    uploadDataVideo,
  } = useAppSelector((state) => state.createCourseSlice)

  const [errorForm, setErrorFrom] = useState(false)
  const [showError, setShowError] = useState(false)

  const checkError = () => {
    if (name.length < 10) return true
    if (category.length < 2) return true
    if (level.length < 1) return true
    if (description.length < 60) return true
    // if (uploadDataVideo.length < 1) return true
    // if (uploadDataPhoto.length < 1) return true

    return false
  }
  const onClickHendler = () => {
    const res = checkError()
    console.log(res)
    if (res === false) {
      return increment()
    }
    setShowError(true)
  }

  return (
    <div>
      <div>
        <BigInput error={showError && name.length < 10} name={name} />
      </div>
      <div>
        <Selectors
          category={category}
          error={showError && category.length < 2}
        />
      </div>
      <div>
        <SelectLevel level={level} error={showError && level.length < 1} />
      </div>
      <div>
        <Description
          description={description}
          error={
            showError && description.length < 60 && 'eroorMessageForDescription'
          }
          long={false}
        />
      </div>
      <div>
        <UploadPhoto
          errorPhoto={showError && uploadDataPhoto.length < 1}
          errorVideo={showError && uploadDataVideo.length < 1}
        />
      </div>
      <div className=' flex justify-end m-4 p-4'>
        <Button
          disabled={errorForm}
          type='submit'
          size={'lg'}
          rightIcon={<BsArrowRightShort />}
          colorScheme='yellow'
          onClick={onClickHendler}
        >
          {t('nextStep')}
        </Button>
      </div>
    </div>
  )
}

export default Step1General
