import { Button } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import PaymentPlans from './elementForStep4/PaymentPlans'

type Props = {
  increment: () => void
  decrement: () => void
}

const Step4Payment = ({ increment, decrement }: Props) => {
  const { t } = useTranslation('myCourses')

  const saveCourse = () => {}

  return (
    <div>
      <PaymentPlans />
      <div className='flex justify-between p-4'>
        <Button
          size={'lg'}
          leftIcon={<AiOutlineArrowLeft />}
          colorScheme='yellow'
          onClick={decrement}
        >
          {t('back')}
        </Button>
        {/* <Button
          size={'lg'}
          // rightIcon={<AiOutlineArrowRight />}
          colorScheme='yellow'
          onClick={increment}
        >
          {t('nextStep')}
        </Button> */}
      </div>
    </div>
  )
}

export default Step4Payment
