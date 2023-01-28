import React from 'react'
import { Item } from '../dashboard/my-course/MyCourse'
import CartItem from './CartItem'
import styles from './Cart.module.scss'
import TotalPriceForm from './TotalPriceForm'

type Props = {}

const CartItems = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        {Item.map((el) => (
          <CartItem item={el} />
        ))}
      </div>
      <div>
        <TotalPriceForm />
      </div>
    </div>
  )
}

export default CartItems
