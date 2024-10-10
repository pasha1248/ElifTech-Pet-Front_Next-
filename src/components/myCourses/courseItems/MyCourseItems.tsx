import { Skeleton } from '@chakra-ui/react'
import React from 'react'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import ItemCourse from '../../dashboard/my-course/ItemCourse'
import { ICourse } from '../../dashboard/my-course/MyCourse'
import styles from './MyCourseItems.module.scss'

type Props = {
  courses?: any
}

const MyCourseItems = ({ courses }: Props) => {
  console.log(courses)
  return (
    <div className={styles.container}>
      {!courses
        ? [...Array(15)].map((el, id) => <Skeleton key={id} height='20px' />)
        : courses.map((el: ICourse) => (
            <LayoutForComponent key={el.id}>
              <ItemCourse item={el} withRating />
            </LayoutForComponent>
          ))}
    </div>
  )
}

export default MyCourseItems
