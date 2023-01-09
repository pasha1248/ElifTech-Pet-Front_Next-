/** @format */

import { title } from 'process'
import React, { FC } from 'react'
import { IMenuItem } from './menu.interface'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

interface IMenu {
  title: string
  items: IMenuItem[] | any
}

const Menu: FC<IMenu> = ({ items, title }) => {
  return (
    <div className={styles.menuSidebar}>
      <ul>
        {items.map((item: any) => (
          <MenuItem item={item} key={item.link} />
        ))}
      </ul>
    </div>
  )
}

export default Menu
