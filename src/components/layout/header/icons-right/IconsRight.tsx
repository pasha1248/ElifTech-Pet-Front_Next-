/** @format */

import React from 'react'

import ProfileMenu from '../profile-menu/ProfileMenu'
// @ts-ignore:next-line
import styles from './IconsRight.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import { IoNotifications } from 'react-icons/io5'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import AuthButtonForHeader from '../auth-botton/AuthButtonForHeader'
import LayoutForComponent from '../../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../../ui/Typography'
import { api } from '../../../../state/api-rtk/api-rtk'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'
import { AppRoute } from '../../sidebar/menu/menu.enum'

type Props = {}

const IconsRight = (props: Props) => {
  const { isAuth } = useAppSelector((state) => state.authSlice)
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { data, isLoading } = api.useGetProfileQuery(null)

  return (
    <LayoutForComponent>
      <div className='flex justify-between items-center'>
        <div>
          <Typography type='h3' className='text-2xl font-mono'>
            {`${data?.firstName} ${data?.lastName} `}
          </Typography>
        </div>

        <div className={styles.icons}>
          {isAuth ? (
            <>
              <div className='mr-5'>
                <Link href={AppRoute.CART}>
                  <FaShoppingCart
                    color={`${themeDark ? '#F1F1F2' : '#1C1D1F'}`}
                    size={30}
                    className={'cursor-pointer'}
                  />
                </Link>
              </div>
              <div className='mr-5'>
                <IoNotifications
                  color={`${themeDark ? '#F1F1F2' : '#1C1D1F'}`}
                  size={30}
                  className={'cursor-pointer'}
                />
              </div>
              <ProfileMenu />
            </>
          ) : (
            <AuthButtonForHeader />
          )}
        </div>
      </div>
    </LayoutForComponent>
  )
}

export default IconsRight
