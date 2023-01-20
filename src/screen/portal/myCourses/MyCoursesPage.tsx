/** @format */

import React from 'react'
import { Layout } from '../../../components/layout/Layout'
import { title } from 'process'
import HeaderForMyCourses from '../../../components/myCourses/HeaderForMyCourses'

interface Props {}

const MyCoursesPage = (props: Props) => {
  return (
    <div>
      <Layout title='My course'>
        <div>
          <HeaderForMyCourses />
        </div>
      </Layout>
    </div>
  )
}

export default MyCoursesPage
