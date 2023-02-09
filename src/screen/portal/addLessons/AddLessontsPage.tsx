import React, { createContext } from 'react'
import { Layout } from '../../../components/layout/Layout'
import LessonsContent from './src/content/lessons/LessonsContent'
import HeaderFromCreatedLessons from './src/header/HeaderFromCreatedLessons'
import SidebarForCreateLessons from './src/sidebar/SidebarForCreateLessons'
import styles from './AddLessonsPage.module.scss'
import { ICourseProps } from '../../../../pages/my-courses/add-lessons/[id]'

type Props = {
  course: ICourseProps
}

const AddLessontsPage = ({ course }: Props) => {
  console.log(course)
  return (
    <div className={styles.container}>
      <Layout title='Add course'>
        <HeaderFromCreatedLessons />
        <div className={styles.content}>
          <LessonsContent course={course} />
          <SidebarForCreateLessons course={course} />
        </div>
      </Layout>
    </div>
  )
}

export default AddLessontsPage
