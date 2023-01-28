import React from 'react'
import PreviewCart from '../../../components/cart/PreviewCart'
import { Layout } from '../../../components/layout/Layout'

type Props = {}

const CartPage = (props: Props) => {
  return (
    <Layout title={'Cart'}>
      <PreviewCart />
    </Layout>
  )
}

export default CartPage
