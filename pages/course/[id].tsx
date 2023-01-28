import Head from 'next/head'
import React from 'react'
import CoursePage from '../../src/screen/portal/course/CoursePage'
import { NextPageAuth } from '../../src/providers/privateRoutes.interface'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPaths } from 'next'

type Props = {}

const CoursePageMain: NextPageAuth = (props: Props) => {
  return (
    <div>
      <Head>
        <link rel='stylesheet' href='path/to/plyr.css' />
      </Head>
      <CoursePage />
    </div>
  )
}

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'course'])),
    },
  }
}

CoursePageMain.isOnlyUser = true

export default CoursePageMain
