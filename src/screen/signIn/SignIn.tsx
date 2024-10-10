/** @format */

import React from 'react'
import { Layout } from '../../components/layout/Layout'
import SignInForm from '../../components/sign/signInForm/SignInForm'
import LayoutForLogin from '../layoutForPages/LayoutForLogin'
import SignInBaner from './components/SignInBaner'

interface Props {}

const SignIn = (props: Props) => {
  return (
    <LayoutForLogin>
      <SignInForm />
      <SignInBaner />
    </LayoutForLogin>
  )
}

export default SignIn
