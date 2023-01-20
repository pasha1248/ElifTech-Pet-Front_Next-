/** @format */

import { Button } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import FormForQuestions from './elementForStep2/formForQuestion/FormForQuestions'

type Props = {
  increment: () => void
  decrement: () => void
}

const Step2Questions = ({ increment, decrement }: Props) => {
  const { t } = useTranslation('myCourses')

  return (
    <div>
      <FormForQuestions />
      <div className='flex justify-between p-4'>
        <Button
          size={'lg'}
          leftIcon={<AiOutlineArrowLeft />}
          colorScheme='yellow'
          onClick={decrement}
        >
          {t('back')}
        </Button>
        <Button
          size={'lg'}
          rightIcon={<AiOutlineArrowRight />}
          colorScheme='yellow'
          onClick={increment}
        >
          {t('nextStep')}
        </Button>
      </div>
    </div>
  )
}

export default Step2Questions
