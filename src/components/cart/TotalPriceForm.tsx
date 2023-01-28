import { Button } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useCurrentCurrency } from '../../hooks/useCurrentCurrency'
import LayoutForComponent from '../../ui/layout/LayoutForComponent'
import { Typography } from '../../ui/Typography'

type Props = {}

const TotalPriceForm = (props: Props) => {
  const { t } = useTranslation('cart')
  const { showPrice } = useCurrentCurrency()
  return (
    <div>
      <LayoutForComponent>
        <div className='text-start text-lg font-medium text-gray-500 '>
          {t('total')}:
        </div>
        <Typography className='text-3xl font-bold' type='h3'>
          {showPrice({ price: 1323 })}
        </Typography>
        <div className='w-full p-4'>
          <Button width={'full'} colorScheme={'yellow'}>
            {t('buy')}
          </Button>
        </div>
      </LayoutForComponent>
    </div>
  )
}

export default TotalPriceForm
