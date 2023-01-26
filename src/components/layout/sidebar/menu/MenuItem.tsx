/** @format */

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { IMenuItem } from './menu.interface'
import styles from './Menu.module.scss'
import cn from 'classnames'

interface Props {}

const MenuItem: FC<{ item: IMenuItem; isOpen: boolean }> = ({
  item,
  isOpen,
}) => {
  const { asPath, pathname } = useRouter()
  console.log(asPath, pathname)

  return (
    <Link href={item.link}>
      <li className={asPath === item.link ? styles.active : ''}>
        <p>
          <span className={item.image ? styles.image : ''}>
            {item.icon && <item.icon size={25} />}
          </span>
          {!isOpen && <b>{item.title}</b>}
        </p>
      </li>
    </Link>
  )
}

export default MenuItem
