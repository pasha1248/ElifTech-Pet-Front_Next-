/** @format */

import Link from 'next/link'
import React, { FC } from 'react'
import { AppRoute } from '../../../common/enums/app-routes.enum'
// @ts-ignore: Unreachable code error
import styles from './Header.module.scss'
import IconsRight from './icons-right/IconsRight'
import Search from './search/Search'
import { GrMenu } from 'react-icons/gr'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import Burger from './burger/Burger'

type Props = {
  toogle: () => void
}

const Header: FC<Props> = (props) => {
  return (
    <div>
      <header className={styles.header}>
        <Burger toogle={props.toogle} />
        <LayoutForComponent>
          <div className='flex items-start'>
            <Search />
          </div>
        </LayoutForComponent>

        <IconsRight />
      </header>
    </div>
  )
}

export default Header
