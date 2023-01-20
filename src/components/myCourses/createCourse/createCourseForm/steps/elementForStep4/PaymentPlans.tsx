import { useRouter } from 'next/router'
import React from 'react'
import { infoForPaymantEn, infoForPaymantUa } from '../dataForSteps'
import ItemPlan from './ItemPlan'

type Props = {}

const PaymentPlans = (props: Props) => {
  const { pathname, locale, locales, push } = useRouter()

  return (
    <div className='flex gap-3'>
      {locale === 'ua' &&
        infoForPaymantUa.map((el) => (
          <ItemPlan typePrices={el} ua key={el.title} />
        ))}
      {locale === 'en' &&
        infoForPaymantEn.map((el) => (
          <ItemPlan typePrices={el} en key={el.title} />
        ))}
    </div>
  )
}

export default PaymentPlans
