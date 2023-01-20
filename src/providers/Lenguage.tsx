/** @format */

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Lenguage = ({ children }: Props) => {
  return <div>{children}</div>
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

export default Lenguage
