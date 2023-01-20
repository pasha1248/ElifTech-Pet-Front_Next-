/** @format */

import React from 'react'
import { Layout } from '../../components/layout/Layout'
import SignInForm from '../../components/sign/signInForm/SignInForm'

interface Props {}

const SignIn = (props: Props) => {
  return (
    <div>
      <Layout title='sign id' withSidebar>
        <SignInForm />
      </Layout>
    </div>
  )
}

export default SignIn
