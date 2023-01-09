/** @format */

import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useAppSelector } from '../hooks/useReduxHooks'
import { TypeComponentAithFields } from './privateRoutes.interface'

const CheckRole: FC<PropsWithChildren<TypeComponentAithFields>> = ({
  children,
  Component: { isOnlyUser },
}) => {
  const { user, isLoading, isAuth } = useAppSelector(state => state.authSlice)

  const { replace, pathname } = useRouter()

  const Children = () => <>{children}</>

  if (isLoading) {
    return null
  }

  if (isAuth) {
    return <Children />
  }

  if (isOnlyUser) pathname !== '/' && replace('/dashboard')

  return null
}

export default CheckRole
