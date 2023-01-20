/** @format */

import React from 'react'
import { Layout } from '../../../components/layout/Layout'
import CreateCourseMail from '../../../components/myCourses/createCourse/CreateCourseMail'

interface Props {}

const CreateCoursePage = (props: Props) => {
  return (
    <Layout title='Create course'>
      <CreateCourseMail />
    </Layout>
  )
}

export default CreateCoursePage
