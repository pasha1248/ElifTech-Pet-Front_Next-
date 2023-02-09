import React from 'react'
import LabelForField from '../../../../../../../../../components/myCourses/createCourse/createCourseForm/steps/elementForStep1/LabelForField'
import styles from './AddVideoFromYoutube.module.scss'

type Props = {}

const AddVideoFromYoutube = (props: Props) => {
  return (
    <div>
      <LabelForField
        label='videoFromYouTube'
        necessary='notNecessarily'
      ></LabelForField>
      <div>
        <iframe
          className={styles.video}
          src='https://www.youtube.com/embed/H8i5Lm12t4g'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>{' '}
      </div>
    </div>
  )
}

export default AddVideoFromYoutube
