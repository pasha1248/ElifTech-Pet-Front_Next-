import React from 'react'
import { ICourseProps } from '../../../../../../../../pages/my-courses/add-lessons/[id]'
import LessonItem from './LessonItem'
import styles from './LessonItems.module.scss'

type Props = {
  course: ICourseProps
}

const LessonsItems = ({ course }: Props) => {
  return (
    <div>
      {course?.sections.length ? (
        course.sections.map((el, id) => (
          <LessonItem
            course={el}
            totalCount={course?.sections.length}
            number={id + 1}
            key={el}
          />
        ))
      ) : (
        <div>Створити </div>
      )}
    </div>
  )
}

export default LessonsItems
