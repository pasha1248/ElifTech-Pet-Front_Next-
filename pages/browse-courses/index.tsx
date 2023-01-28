import { GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import BrowseCourse from '../../src/screen/portal/browseCourse/BrowseCourse'

type Props = {}

const BrowsePageMain = (props: Props) => {
  return (
    <div>
      <BrowseCourse />
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

BrowsePageMain.isOnlyUser = true

export default BrowsePageMain
