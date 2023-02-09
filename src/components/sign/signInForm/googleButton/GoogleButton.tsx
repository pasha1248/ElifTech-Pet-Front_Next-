/** @format */

import React, { useCallback } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

import { useRouter } from 'next/router'
import { useActions } from '../../../../hooks/useActions'
import { AppRoute } from '../../../../common/enums/app-routes.enum'
import { notifyError } from '../../../../common/notifications/notifications'

const GoogleButton = (props: any) => {
  const { authWithGoogle } = useActions()
  const { push } = useRouter()

  const googleAuth = useCallback(
    (token: any) => {
      authWithGoogle([token, push])
    },
    [authWithGoogle,push]
  )

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <GoogleOAuthProvider
        clientId={`${process.env.NEXT_PUBLIC_API_GOOGLE_ID}`}
      >
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            googleAuth(credentialResponse.credential)
            push(AppRoute.HOME)
          }}
          type='standard'
          onError={() => {
            notifyError('Authorization failed')
          }}
          theme='filled_black'
        />
      </GoogleOAuthProvider>
    </div>
  )
}

export default GoogleButton
