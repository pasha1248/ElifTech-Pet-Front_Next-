/** @format */

import React from 'react'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../ui/Typography'
import ItemCourse from './ItemCourse'
import styles from './MyCourse.module.scss'
import UserAvatar from '../../user.avatar/UserAvatar'

export interface ICourse {
  id: number
  category: string
  name: string
  imgItem: string
  userAvatar: string
  complexity: string
  progress: number
}

const Item: ICourse[] = [
  {
    id: 1,
    name: 'Makeup',
    category: 'Beauty',
    imgItem:
      'https://barebeauty.ie/wp-content/uploads/2021/04/BareBeautyBackground-1-1024x576-1.jpg',
    userAvatar:
      'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png',
    complexity: 'complexity1',
    progress: 30,
  },
  {
    id: 2,

    name: 'Makeup',
    category: 'Beauty',
    imgItem:
      'https://barebeauty.ie/wp-content/uploads/2021/04/BareBeautyBackground-1-1024x576-1.jpg',
    userAvatar:
      'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png',
    complexity: 'complexity2',
    progress: 10,
  },
  {
    id: 3,

    name: 'Makeup',
    category: 'Beauty',
    imgItem:
      'https://barebeauty.ie/wp-content/uploads/2021/04/BareBeautyBackground-1-1024x576-1.jpg',
    userAvatar:
      'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png',
    complexity: 'complexity3',
    progress: 90,
  },
]

const MyCourse = () => {
  return (
    <div>
      <div className='flex justify-between items-center mt-4'>
        <Typography type='h3' className='text-xl'>
          Your course
        </Typography>
        <Typography type='h2'>All course</Typography>
      </div>
      <div className='flex '>
        {Item.map((item: ICourse) => (
          <LayoutForComponent key={item.id} small>
            <ItemCourse item={item} />
          </LayoutForComponent>
        ))}
      </div>
    </div>
  )
}

export default MyCourse
