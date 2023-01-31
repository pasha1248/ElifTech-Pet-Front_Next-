/** @format */

import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAppSelector } from '../../hooks/useReduxHooks'
import { ICourse } from '../dashboard/my-course/MyCourse'
import MyCourseItems from './courseItems/MyCourseItems'
import CreatedItems from './createdItems/CreatedItems'
import HeaderSelect from './myCourse/HeaderSelect'

interface Props {
  courses: ICourse
}
const stepsComponents: any = {
  1: MyCourseItems,
  2: CreatedItems,
}
const HeaderForMyCourses = ({ courses }: Props) => {
  const [step, setStep] = useState<number>(1)
  const Step = stepsComponents[step]
  const onNextStep = (id: number) => {
    setStep(id)
  }
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('myCourses')
  return (
    <div>
      <div>
        <Link href={'my-courses/create-course'}>
          <Button
            colorScheme={`${themeDark ? 'orange' : 'orange'}`}
            _hover={{ backgroundColor: 'gray.100' }}
            variant='outline'
            rightIcon={<AiOutlinePlus />}
          >
            {t('clreateCourseButton')}
          </Button>
        </Link>
      </div>
      <HeaderSelect step={step} onNextStep={onNextStep} />
      <div className='mb-5'></div>
      <div>
        <div>
          <Step courses={courses} />
        </div>
      </div>
    </div>
  )
}

export default HeaderForMyCourses
