/** @format */

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { NextPageAuth } from '../../src/providers/privateRoutes.interface'
import MyCoursesPage from '../../src/screen/portal/myCourses/MyCoursesPage'

interface Props {}

const MyCourses: NextPageAuth = (props: Props) => {
  return (
    <div>
      <MyCoursesPage />
    </div>
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

MyCourses.isOnlyUser = true

export default MyCourses
