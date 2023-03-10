/** @format */

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'
import Home from '../src/screen/home/Home'
import { useAppSelector } from '../src/hooks/useReduxHooks'
import { useActions } from '../src/hooks/useActions'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { checkAuth } from '../src/state/slice/auth-slice/auth.actions'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage<any> = () => {
  const { isAuth } = useAppSelector((state) => state.authSlice)
  const { checkAuth } = useActions()

  const { locale, locales, push } = useRouter()

  const handle = (l: any) => {
    push('/', undefined, { locale: l })
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Home />
      </main>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'dashboard',
        'myCourses',
      ])),
    },
  }
}

export default HomePage
