/** @format */

import { Stack, Switch } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { title } from 'process'
import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import { api } from '../../../state/api-rtk/api-rtk'
import Example from '../../../ui/disclosure/Disclosure'
import Toggle from '../../../ui/switch/Toggle'
import ChangeLanguage from './change-language/ChangeLanguage'
import Menu from './menu/Menu'
import { menu } from './menu/menu.data'
import style from './Sidebar.module.scss'

interface Props {}

const Sidebar: FC = (props: Props) => {
  const { user } = useAppSelector(state => state.authSlice)

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  return (
    <aside className={style.sidebar}>
      <div className={style.fixed}>
        <Link href={'/'}>
          <p className={style.logo}>
            Course <span>.</span>
          </p>
        </Link>

        <Menu title={'Menu'} items={menu} />

        {/* {user && (
          <Menu
            title='My subscribers'
            items={
              data?.subscriptions.map(({ toChannel }: any) => ({
                image: toChannel.avatarPath,
                title: toChannel.name,
                link: '/c/' + toChannel.id,
              })) || []
            }
          />
        )} */}
        <br />
        <br />

        <div className='flex justify-center items-center flex-col	'>
          <ChangeLanguage />
          <br />
          <br />
          <Toggle />
        </div>
        <div className={style.copy}>2022 Developer Pavlo Ivashkiv</div>
      </div>
    </aside>
  )
}

export default Sidebar
