/** @format */

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { NextPageAuth } from '../../src/providers/privateRoutes.interface'
import MyCoursesPage from '../../src/screen/portal/myCourses/MyCoursesPage'
import { CoursesService } from '../../src/services/courses/courses.service'

interface Props {
  courses: any
}

const MyCourses: NextPageAuth<Props> = ({ courses }) => {
  return (
    <div>
      <MyCoursesPage courses={courses} />
    </div>
  )
}

export const getServerSideProps = async (option: any) => {
  const cookie = option.req.cookies

  try {
    const data = await CoursesService.getCoursesByOwner(cookie)

    return {
      props: {
        courses: data,
        ...(await serverSideTranslations(option.locale, [
          'common',
          'dashboard',
          'myCourses',
        ])),
      },
    }
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(option.locale, [
          'common',
          'dashboard',
          'myCourses',
        ])),
      },
    }
  }
}

MyCourses.isOnlyUser = true

export default MyCourses
