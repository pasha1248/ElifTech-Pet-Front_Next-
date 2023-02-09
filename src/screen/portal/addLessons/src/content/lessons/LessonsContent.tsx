import React from 'react'
import { ICourseProps } from '../../../../../../../pages/my-courses/add-lessons/[id]'
import LessonsItems from './section/LessonsItems'

type Props = {
  course: ICourseProps
}

const LessonsContent = ({ course }: Props) => {
  return (
    <div>
      <LessonsItems course={course} />
    </div>
  )
}

export default LessonsContent
