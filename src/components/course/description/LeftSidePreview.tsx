import React from 'react'
import PlayerCustom from '../../../ui/player/PlayerCustom'
import { Typography } from '../../../ui/Typography'
import DescriptionForCourse from './DescriptionForCourse'
import HeaderCoursePreview from './HeaderCoursePreview'

type Props = {}

const LeftSidePreview = (props: Props) => {
  return (
    <div className='mb-6'>
      {' '}
      <div>
        {/* name course*/}
        <HeaderCoursePreview />
      </div>
      <div>
        <PlayerCustom />
      </div>
      <div className='mt-8'>
        <DescriptionForCourse />
      </div>
    </div>
  )
}

export default LeftSidePreview
