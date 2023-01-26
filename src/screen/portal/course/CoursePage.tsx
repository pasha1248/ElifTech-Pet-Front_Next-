import React from 'react'
import PreviewCourse from '../../../components/course/description/PreviewCourse'
import DescriptionCoursePage from '../../../components/course/description/PreviewCourse'
import { Layout } from '../../../components/layout/Layout'
import PlayerCustom from '../../../ui/player/PlayerCustom'

type Props = {}

const CoursePage = (props: Props) => {
  return (
    <Layout title='Course'>
      <PreviewCourse />
    </Layout>
  )
}

export default CoursePage
