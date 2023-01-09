/** @format */

import React from 'react'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../ui/Typography'
import ItemCourse from './ItemCourse'

interface Props {}

const Item = [
  {
    id: 1,
    name: 'Makeup',
    category: 'Beauty',
    imgItem:
      'https://barebeauty.ie/wp-content/uploads/2021/04/BareBeautyBackground-1-1024x576-1.jpg',
    userAvatar:
      'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png',
  },
  {
    id: 2,

    name: 'Makeup',
    category: 'Beauty',
    imgItem:
      'https://barebeauty.ie/wp-content/uploads/2021/04/BareBeautyBackground-1-1024x576-1.jpg',
    userAvatar:
      'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png',
  },
  {
    id: 3,

    name: 'Makeup',
    category: 'Beauty',
    imgItem:
      'https://barebeauty.ie/wp-content/uploads/2021/04/BareBeautyBackground-1-1024x576-1.jpg',
    userAvatar:
      'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png',
  },
]

const MyCourse = (props: Props) => {
  return (
    <div>
      <div>
        <Typography type='h3' className='text-xl'>
          Your course
        </Typography>
        <Typography type='h2'>All course</Typography>
      </div>
      <div className='flex '>
        {Item.map(item => (
          <LayoutForComponent key={item.id} small>
            <ItemCourse item={item} />
          </LayoutForComponent>
        ))}
      </div>
    </div>
  )
}

export default MyCourse
