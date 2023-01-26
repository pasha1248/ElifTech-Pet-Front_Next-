/** @format */

import { Progress } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { IconContext } from 'react-icons'
import { AiFillSignal } from 'react-icons/ai'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import RateIconComplexity1 from '../../../ui/icon/RateIconComplexity1'
import RateIconComplexity2 from '../../../ui/icon/RateIconComplexity2'
import RateIcon from '../../../ui/icon/RateIconComplexity2'
import RateIconComplexity3 from '../../../ui/icon/RateIconComplexity3'
import RatingStars from '../../../ui/rating/RatingStars'
import { Typography } from '../../../ui/Typography'
import { AppRoute } from '../../layout/sidebar/menu/menu.enum'
import UserAvatar from '../../user.avatar/UserAvatar'
import ComplexityIcon from './Complexity'
import { ICourse } from './MyCourse'
import styles from './MyCourse.module.scss'

interface Props {
  item: ICourse
  forDashboard?: boolean
  withRating?: boolean
}

const ItemCourse = ({ item, forDashboard, withRating }: Props) => {
  const { t: translate } = useTranslation('dashboard')
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  return (
    <>
      <Link href={AppRoute.COURSE + item.id}>
        <div>
          <div className='relative'>
            <img src={item.imgItem} alt='' className='rounded-3xl' />
            <div
              className={`absolute bottom-1 left-2 flex w-min justify-center	 gap-2 items-center p-1 px-2 ${
                !themeDark ? 'bg-gray-100' : 'bg-[#1C1D1F]'
              } rounded-3xl`}
            >
              <Typography type='Ag-13-medium' className='text-sm font-bold'>
                {translate(item.complexity)}
              </Typography>
              <div>
                {item.complexity === 'complexity1' && <RateIconComplexity1 />}
                {item.complexity === 'complexity3' && <RateIconComplexity3 />}
                {item.complexity === 'complexity2' && <RateIconComplexity2 />}
              </div>
            </div>
          </div>
          <div className='p-2'>
            <div className='flex justify-between'>
              <div>
                <Typography type='h3' className='mt-1 '>
                  {item.name}
                </Typography>
                <Typography type='span' className={'text-xs text-gray-400'}>
                  {item.name}
                </Typography>
              </div>
              {/* <UserAvatar user={} /> */}
              <img src={item.userAvatar} alt={item.userAvatar} width={50} />
            </div>
            {forDashboard && (
              <div>
                <Progress
                  value={item.progress}
                  colorScheme={'yellow'}
                  isAnimated
                  borderRadius={'2xl'}
                />
                <div>
                  <Typography type='span' className='text-xs text-gray-300'>
                    {translate('completed')}: {item.progress}%
                  </Typography>
                </div>
              </div>
            )}
          </div>
          {withRating && <RatingStars rate={3} />}
        </div>
      </Link>
    </>
  )
}

export default ItemCourse
