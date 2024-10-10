import React, { useState } from 'react'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import styles from './Burger.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'

type Props = {
  toogle: () => void
}

const Burger = (props: Props) => {
  const { openBurger } = useAppSelector((state) => state.changeBurgerSlice)

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='flex justify-center items-center'>
      <div onClick={props.toogle}>
        <GiHamburgerMenu className={styles.icon} />
      </div>
    </div>
  )
}

export default Burger
