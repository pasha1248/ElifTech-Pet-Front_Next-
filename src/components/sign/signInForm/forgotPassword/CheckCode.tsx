/** @format */

import Link from 'next/link'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useActions } from '../../../../hooks/useActions'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import Field from '../../../../ui/fields/Field'
import { AppRoute } from '../../../layout/sidebar/menu/menu.enum'

import { IForgotPassword } from '../auth.interface'
// @ts-ignore
import styles from '../SignInForm.module.scss'
import ChangePassword from './ChangePassword'

const CheckCode = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ code: string }>({ mode: 'onChange' })

  const { verifyCode } = useActions()
  const { accessChangePassword } = useAppSelector(
    (state) => state.forgotPasswordSlice
  )
  const onSubmit: SubmitHandler<{ code: string }> = async (data) => {
    try {
      verifyCode(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      {!accessChangePassword ? (
        <div className={styles.container}>
          <h2>Code check</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Field
              type='text'
              placeholder='code...'
              error={errors.code}
              {...register('code', {
                required: 'Please write code',
                minLength: {
                  value: 6,
                  message: 'Min length is 6 symbols',
                },
              })}
            />
            <div className={styles.forgotButtons}>
              <Link href={AppRoute.HOME}>Back</Link>
              <button>Send code</button>
            </div>
          </form>
        </div>
      ) : (
        <ChangePassword />
      )}
    </div>
  )
}

export default CheckCode
