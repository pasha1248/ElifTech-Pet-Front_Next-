/** @format */

import React from 'react'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../ui/Typography'
import ItemCourse from './ItemCourse'
import styles from './MyCourse.module.scss'
import UserAvatar from '../../user.avatar/UserAvatar'
import { IBase } from '../../../state/slice/base.interface'
import { IUser } from '../../../state/slice/user-slice/user.interface'
import { api } from '../../../state/api-rtk/api-rtk'
import Carousel from '../../../ui/carousel/Carousel'
import { CarouselCustom } from '../../../ui/carousel/CarouselCustom'
import ChakraCarouselMain from '../../../ui/carousel/chakraCarousel'

export interface ICourse extends IBase {
  id: string

  name: string
  category: string
  description: string
  level: string
  plan: string
  uploadDataPhoto: string
  uploadDataVideo: string
  user: IUser
  progres?: number
}

export const Item: ICourse[] = [
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
    id: '2',

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
    id: '3',

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
  const { data, isLoading } = api.useGetProfileQuery(null)

  return (
    <div>
      <div className='flex justify-between items-center mt-4'>
        <Typography type='h3' className='text-xl'>
          Your course
        </Typography>
        <Typography type='h2'>All course</Typography>
      </div>
      <div className='flex '></div>
      <div>{data && <ChakraCarouselMain data={data} />}</div>
    </div>
  )
}

export default MyCourse
