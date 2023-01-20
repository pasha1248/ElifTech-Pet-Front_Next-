/** @format */

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useEffect, useState } from 'react'
import CreateCoursePage from '../../src/screen/portal/myCourses/CreateCoursePage'

interface Props {}

const CreateCourse = (props: Props) => {
  return (
    <div>
      <CreateCoursePage />
    </div>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dashboard', 'myCourses'])),
    },
  }
}
CreateCourse.isOnlyUser = true

export default CreateCourse
