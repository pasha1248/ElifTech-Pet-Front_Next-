/** @format */

import React from 'react'
import { Layout } from '../../../components/layout/Layout'
import { title } from 'process'
import HeaderForMyCourses from '../../../components/myCourses/HeaderForMyCourses'
import MyCourseItems from '../../../components/myCourses/courseItems/MyCourseItems'

interface Props {
  courses?: any
}

const MyCoursesPage = ({ courses }: Props) => {
  return (
    <div>
      <Layout title='My course'>
        <div className='mb-5'>
          <HeaderForMyCourses />
        </div>
        <div>
          <div>
            <MyCourseItems courses={courses} />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default MyCoursesPage
