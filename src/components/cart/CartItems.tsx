import React from 'react'
import CartItem from './CartItem'
import styles from './Cart.module.scss'
import TotalPriceForm from './TotalPriceForm'

type Props = {}

const CartItems = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        {/* {Item.map((el) => (
          <CartItem item={el} key={el.id} />
        ))} */}
      </div>
      <div>
        <TotalPriceForm />
      </div>
    </div>
  )
}

export default CartItems
