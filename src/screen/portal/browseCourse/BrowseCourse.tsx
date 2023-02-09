import React from 'react'
import SaerchHeader from '../../../components/browseCourses/searchHeader/SaerchHeader'
import ItemCourse from '../../../components/dashboard/my-course/ItemCourse'
import { ICourse } from '../../../components/dashboard/my-course/MyCourse'
import { Layout } from '../../../components/layout/Layout'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import styles from './BrowseCourse.module.scss'

type Props = {
  courses: ICourse[]
}

const BrowseCourse = ({ courses }: Props) => {
  return (
    <Layout title='Browse course'>
      <SaerchHeader />
      <div className={styles.container}>
        {courses.map((el) => (
          <LayoutForComponent key={el.id}>
            <ItemCourse withRating item={el} />
          </LayoutForComponent>
        ))}
      </div>
    </Layout>
  )
}

export default BrowseCourse
