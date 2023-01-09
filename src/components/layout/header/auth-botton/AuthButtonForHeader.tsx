/** @format */

import Link from 'next/link'
import React from 'react'
import { AppRoute } from '../../../../common/enums/app-routes.enum'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'

type Props = {}

const AuthButtonForHeader = (props: Props) => {
  return (
    <Link href={AppRoute.SIGN_IN}>
      <ButtonAuth>Sign in</ButtonAuth>
    </Link>
  )
}

export default AuthButtonForHeader
