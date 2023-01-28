import { Button } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useCurrentCurrency } from '../../../hooks/useCurrentCurrency'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../ui/Typography'

type Props = {}

const ButtonForPay = (props: Props) => {
  const { t } = useTranslation('course')
  const { showPrice } = useCurrentCurrency()
  return (
    <div className='pb-4'>
      <LayoutForComponent>
        <div className='pb-2 px-2'>
          <div>
            <Typography
              type='h2'
              className='text-start text-[35px] font-extrabold'
            >
              {' '}
              {showPrice({ price: 13.99 })}
            </Typography>
          </div>
          <div className=' w-full'>
            <Button width={'full'} marginBottom={'1.5'} colorScheme='yellow'>
              {t('addToCart')}
            </Button>
            <Button
              width={'full'}
              color={'yellow.500'}
              variant='outline'
              colorScheme='yellow'
            >
              {t('buyNow')}
            </Button>
          </div>
        </div>
      </LayoutForComponent>
    </div>
  )
}

export default ButtonForPay
