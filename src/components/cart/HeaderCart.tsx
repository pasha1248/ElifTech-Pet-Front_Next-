import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '../../ui/Typography'

type Props = {}

const HeaderCart = (props: Props) => {
  const { t } = useTranslation('cart')
  return (
    <div>
      <Typography className='text-3xl text-start mb-4 font-semibold' type='h2'>
        {t('shoppingCart')}
      </Typography>
      <hr />
    </div>
  )
}

export default HeaderCart
