/** @format */

import { Progress } from '@chakra-ui/react'
import Image from 'next/image'
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
            {item.uploadDataPhoto ? (
              <Image
                loader={(src) => item.uploadDataPhoto}
                src={item.uploadDataPhoto}
                alt=''
                className='rounded-2xl'
                height={100}
                width={100}
              />
            ) : (
              <Image
                loader={(src) => '/image/mockCoursePreview.svg'}
                src={'/image/mockCoursePreview.svg'}
                alt='next'
                height={100}
                width={100}
              />
            )}
            <div
              className={`absolute bottom-1 left-2 flex w-min justify-center	 gap-2 items-center p-1 px-2 ${
                !themeDark ? 'bg-gray-100' : 'bg-[#1C1D1F]'
              } rounded-3xl`}
            >
              <Typography type='Ag-13-medium' className='text-sm font-bold'>
                {translate(item.level)}
              </Typography>
              <div>
                {item.level === 'complexity1' && <RateIconComplexity1 />}
                {item.level === 'complexity3' && <RateIconComplexity3 />}
                {item.level === 'complexity2' && <RateIconComplexity2 />}
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
                  {item.category}
                </Typography>
              </div>
              {/* <UserAvatar user={} /> */}
              <Image
                src={item.user.avatarPath}
                alt={item.user.avatarPath}
                style={{ borderRadius: '50%' }}
                width={50}
                height={50}
              />
            </div>
            {forDashboard && (
              <div>
                <Progress
                  value={item.progres}
                  colorScheme={'yellow'}
                  isAnimated
                  borderRadius={'2xl'}
                />
                <div>
                  <Typography type='span' className='text-xs text-gray-300'>
                    {translate('completed')}: {item.progres}%
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
