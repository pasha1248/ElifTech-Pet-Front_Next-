/** @format */

import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { EMAIL_RULE } from '../../../../common/const/Regex'
import { useActions } from '../../../../hooks/useActions'
import Field from '../../../../ui/fields/Field'
import { Layout } from '../../../layout/Layout'
import { AppRoute } from '../../../layout/sidebar/menu/menu.enum'

import { IForgotPassword } from '../auth.interface'
// @ts-ignore
import styles from '../SignInForm.module.scss'

const ForgotPassword = () => {
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForgotPassword>({ mode: 'onChange' })

  const { checkEmailAndSendCode } = useActions()

  const onSubmit: SubmitHandler<IForgotPassword> = async (data) => {
    try {
      checkEmailAndSendCode([data, push])
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <h2>Forgot password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Field
            type='text'
            placeholder='email'
            error={errors.email}
            {...register('email', {
              required: 'Email is required',
              minLength: 5,
              pattern: {
                value: EMAIL_RULE,
                message: 'Email must be correct',
              },
            })}
          />
          <div className={styles.forgotButtons}>
            <Link href={AppRoute.HOME}>Back</Link>
            <button>Send code</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
