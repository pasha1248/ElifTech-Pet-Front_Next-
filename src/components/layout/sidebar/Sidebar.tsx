/** @format */

import Link from 'next/link'
import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import { api } from '../../../state/api-rtk/api-rtk'
import Toggle from '../../../ui/switch/Toggle'
import ChangeLanguage from './change-language/ChangeLanguage'
import Menu from './menu/Menu'
import style from './Sidebar.module.scss'

interface Props {
  initialState: boolean
  open?: () => void
  close?: () => void
}

const Sidebar: FC<Props> = ({ initialState, open, close }) => {
  const { user } = useAppSelector((state) => state.authSlice)

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  return (
    <aside className={!initialState ? style.sidebar : style.sidebarClose}>
      <div className={style.fixed}>
        <Link href={'/'}>
          <p className={style.logo}>
            Course <span>.</span>
          </p>
        </Link>

        <Menu isOpen={initialState} />

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
          {!initialState && (
            <>
              <ChangeLanguage />
              <br />
              <br />
            </>
          )}

          <Toggle />
        </div>
        {!initialState && (
          <div className={style.copy}>2022 Developer Pavlo Ivashkiv</div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
