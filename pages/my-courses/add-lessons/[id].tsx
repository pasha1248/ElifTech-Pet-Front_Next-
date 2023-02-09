import Head from 'next/head'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPaths } from 'next'
import { NextPageAuth } from '../../../src/providers/privateRoutes.interface'
import AddLessontsPage from '../../../src/screen/portal/addLessons/AddLessontsPage'
import { CoursesService } from '../../../src/services/courses/courses.service'
import { IBase } from '../../../src/state/slice/base.interface'

export interface ICourseProps extends IBase {
  name: string
  category: string
  description: string
  level: string
  plan: string
  uploadDataPhoto: string
  uploadDataVideo: string
  sections: any[]
}
type PropsAddLessonsPage = {
  course: ICourseProps
}

const AddLessons: NextPageAuth<PropsAddLessonsPage> = ({
  course,
}: PropsAddLessonsPage) => {
  return (
    <div>
      <main>{<AddLessontsPage course={course} />}</main>
    </div>
  )
}

export async function getServerSideProps({ locale, req, query }: any) {
  const queryId = query
  const cookie = req.cookies
  console.log(query)

  try {
    const data = await CoursesService.getCourses(query, cookie)
    console.log(data)
    return {
      props: {
        course: data,
        ...(await serverSideTranslations(locale, [
          'common',
          'addLessons',
          'myCourses',
        ])),
      },
    }
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'addLessons',
          'myCourses',
        ])),
      },
    }
  }
}

AddLessons.isOnlyUser = true

export default AddLessons
