/** @format */

import Link from 'next/link'
import React, { FC } from 'react'
import { AppRoute } from '../../../common/enums/app-routes.enum'
// @ts-ignore: Unreachable code error
import styles from './Header.module.scss'
import IconsRight from './icons-right/IconsRight'
import Search from './search/Search'
import { GrMenu } from 'react-icons/gr'

type Props = {
  toogle: () => void
}

const Header: FC<Props> = (props) => {
  return (
    <div>
      <header className={styles.header}>
        <div className='flex items-start'>
          <div onClick={props.toogle} className={styles.burger}>
            <GrMenu size={27} />
          </div>
          <Search />
        </div>
        <IconsRight />
      </header>
    </div>
  )
}

export default Header
