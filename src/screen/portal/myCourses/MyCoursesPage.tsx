/** @format */

import React from 'react'
import { Layout } from '../../../components/layout/Layout'
import { title } from 'process'
import HeaderForMyCourses from '../../../components/myCourses/HeaderForMyCourses'
import MyCourseItems from '../../../components/myCourses/courseItems/MyCourseItems'
import HeaderSelect from '../../../components/myCourses/myCourse/HeaderSelect'

interface Props {
  courses?: any
}

const MyCoursesPage = ({ courses }: Props) => {
  return (
    <div>
      <Layout title='My course'>
        <HeaderForMyCourses courses={courses} />
      </Layout>
    </div>
  )
}

export default MyCoursesPage
