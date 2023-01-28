import React from 'react'
import CartItems from './CartItems'
import HeaderCart from './HeaderCart'

type Props = {}

const PreviewCart = (props: Props) => {
  return (
    <div>
      <div>
        <HeaderCart />
        <CartItems />
      </div>
    </div>
  )
}

export default PreviewCart
