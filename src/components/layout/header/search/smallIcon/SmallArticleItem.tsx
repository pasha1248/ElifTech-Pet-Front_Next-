/** @format */

import React, { FC } from 'react'
import cn from 'classnames'
import styles from './ArticleItem.module.scss'
import { BiEdit, BiTrash } from 'react-icons/bi'
import UserAvatar from '../../../../user.avatar/UserAvatar'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ItemCourse from '../../../../dashboard/my-course/ItemCourse'
import { ICourse } from '../../../../dashboard/my-course/MyCourse'
import { AppRoute } from '../../../sidebar/menu/menu.enum'
import { useAppSelector } from '../../../../../hooks/useReduxHooks'
import { Typography } from '../../../../../ui/Typography'
import { useTranslation } from 'react-i18next'
import RateIconComplexity1 from '../../../../../ui/icon/RateIconComplexity1'
import RateIconComplexity3 from '../../../../../ui/icon/RateIconComplexity3'
import RateIconComplexity2 from '../../../../../ui/icon/RateIconComplexity2'
import RatingStars from '../../../../../ui/rating/RatingStars'
import Image from 'next/image'

const SmallVideoItem: FC<any> = ({ isSmall, removeHandler, item }) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('dashboard')
  const { push } = useRouter()

  return (
    <div
      className={cn(styles.article_item, {
        [styles.small]: isSmall,
      })}
    >
      <Link href={AppRoute.COURSE + item.id}>
        <div className='h-[250px] flex flex-col justify-between'>
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
                {t(item.level)}
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
              <div className='w-full'>
                <Typography type='h3' className='mt-1 '>
                  {item?.name?.split('').splice(0, 50).join('')}
                  {item?.name?.split('').length > 50 ? <span>...</span> : ''}
                </Typography>
                <Typography type='span' className={'text-xs text-gray-400'}>
                  {item.category}
                </Typography>
              </div>
            </div>
          </div>
          <RatingStars rate={3} />
        </div>
      </Link>
    </div>
  )
}

export default SmallVideoItem
