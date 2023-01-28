/** @format */

import { useRouter } from 'next/router'
import { title } from 'process'
import React, { FC } from 'react'
import { IMenuItem } from './menu.interface'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { menuEn, menuUa } from './menu.data'
import { useAppSelector } from '../../../../hooks/useReduxHooks'

interface IMenu {
  items?: IMenuItem[] | any
  isOpen: boolean
}

const Menu: FC<IMenu> = ({ isOpen }) => {
  const { openBurger } = useAppSelector((state) => state.changeBurgerSlice)
  const { locale } = useRouter()
  return (
    <div className={!openBurger ? styles.menuSidebar : styles.menuSidebarClose}>
      <ul>
        {locale === 'en' &&
          menuEn.map((item: any) => (
            <MenuItem isOpen={isOpen} item={item} key={item.link} />
          ))}
        {locale === 'ua' &&
          menuUa.map((item: any) => (
            <MenuItem isOpen={isOpen} item={item} key={item.link} />
          ))}
      </ul>
    </div>
  )
}

export default Menu
