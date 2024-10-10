/** @format */

import React from 'react'
import SignUpForm from '../../components/sign/signUpForm/SignUpFrom'
import LayoutForLogin from '../layoutForPages/LayoutForLogin'
import SignUpBaner from './components/SignUpBaner'

interface Props {}

const SignUp = (props: Props) => {
  return (
    <LayoutForLogin>
      <SignUpForm />
      <SignUpBaner />
    </LayoutForLogin>
  )
}

export default SignUp
