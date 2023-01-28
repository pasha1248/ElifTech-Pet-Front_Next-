import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { NextPageAuth } from '../../src/providers/privateRoutes.interface'
import CartPage from '../../src/screen/portal/cart/CartPage'

type Props = {}

const CardMainPage: NextPageAuth = (props: Props) => {
  return (
    <div>
      <CartPage />
    </div>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'cart'])),
    },
  }
}
CardMainPage.isOnlyUser = true
export default CardMainPage
