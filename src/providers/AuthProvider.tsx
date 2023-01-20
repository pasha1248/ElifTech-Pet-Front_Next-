/** @format */

import dynamic from 'next/dynamic'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { TypeComponentAithFields } from './privateRoutes.interface'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
  ssr: false,
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAithFields>> = ({
  Component: { isOnlyUser },
  children,
}) => {
  const { checkAuth } = useActions()

  useEffect(() => {
    // Perform localStorage action
    if (localStorage?.getItem('auth')) {
      console.log('refresh')
      checkAuth()
    }
  }, [])

  return !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  )
}

export default AuthProvider
