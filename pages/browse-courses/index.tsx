import { GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { ICourse } from '../../src/components/dashboard/my-course/MyCourse'
import BrowseCourse from '../../src/screen/portal/browseCourse/BrowseCourse'
import { CoursesService } from '../../src/services/courses/courses.service'

interface IBrowseCourse {
  data: ICourse[]
  count: number
}

type Props = {
  courses: IBrowseCourse
}

const BrowsePageMain = ({ courses }: Props) => {
  return (
    <div>
      <BrowseCourse courses={courses.data} />
    </div>
  )
}

export const getServerSideProps = async (option: any) => {
  const cookie = option.req.cookies

  try {
    const data = await CoursesService.getAllCourses(cookie)

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
BrowsePageMain.isOnlyUser = true

export default BrowsePageMain
