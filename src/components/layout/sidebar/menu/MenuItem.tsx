/** @format */

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { IMenuItem } from './menu.interface'
import styles from './Menu.module.scss'

interface Props {}

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath, pathname } = useRouter()

  return (
    <li>
      <Link href={item.link}>
        <p className={asPath === item.link ? styles.active : ''}>
          <span className={item.image ? styles.image : ''}>
            {item.icon && <item.icon size={25} className={'mr-2'} />}
            {item?.image && (
              <img src={item.image} width={40} height={40} alt={item.title} />
            )}
          </span>
          <b>{item.title}</b>
        </p>
      </Link>
    </li>
  )
}

export default MenuItem
