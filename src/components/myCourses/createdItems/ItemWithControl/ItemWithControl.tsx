import { useTransform } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import RateIconComplexity1 from '../../../../ui/icon/RateIconComplexity1'
import RateIconComplexity2 from '../../../../ui/icon/RateIconComplexity2'
import RateIconComplexity3 from '../../../../ui/icon/RateIconComplexity3'
import LayoutForComponent from '../../../../ui/layout/LayoutForComponent'
import RatingStars from '../../../../ui/rating/RatingStars'
import { Typography } from '../../../../ui/Typography'
import ItemCourse from '../../../dashboard/my-course/ItemCourse'
import { ICourse } from '../../../dashboard/my-course/MyCourse'
import { AppRoute } from '../../../layout/sidebar/menu/menu.enum'
import { FaPen, FaTrash } from 'react-icons/fa'
import { SiGoogleanalytics } from 'react-icons/si'
import styles from '../CreatedItems.module.scss'

type Props = {
  course: ICourse
}

const ItemWithControl = ({ course }: Props) => {
  const { t } = useTranslation('myCourses')
  const { themeDark } = useAppSelector((state: any) => state.changeThemeSlice)
  return (
    <div>
      <LayoutForComponent>
        <Link href={AppRoute.COURSE + course.id}>
          <div>
            <div className='relative'>
              {course.uploadDataPhoto ? (
                <img
                  src={course.uploadDataPhoto}
                  alt=''
                  className='rounded-2xl'
                />
              ) : (
                <img src={'/image/mockCoursePreview.svg'} alt='next' />
              )}
              <div
                className={`absolute bottom-1 left-2 flex w-min justify-center	 gap-2 items-center p-1 px-2 ${
                  !themeDark ? 'bg-gray-100' : 'bg-[#1C1D1F]'
                } rounded-3xl`}
              >
                <Typography type='Ag-13-medium' className='text-sm font-bold'>
                  {t(course.level)}
                </Typography>
                <div>
                  {course.level === 'complexity1' && <RateIconComplexity1 />}
                  {course.level === 'complexity3' && <RateIconComplexity3 />}
                  {course.level === 'complexity2' && <RateIconComplexity2 />}
                </div>
              </div>
            </div>
            <div className='p-2'>
              <div className='flex justify-between'>
                <div>
                  <Typography type='h3' className='mt-1 '>
                    {course.name}
                  </Typography>
                  <Typography type='span' className={'text-xs text-gray-400'}>
                    {course.category}
                  </Typography>
                </div>
                {/* <UserAvatar user={} /> */}
              </div>
            </div>

            <RatingStars rate={3} />
          </div>
        </Link>
        <div className={styles.controlIcon}>
          <FaPen className={styles.icon} />
          <SiGoogleanalytics className={styles.icon2} />
          <FaTrash className={styles.icon3} />
        </div>
      </LayoutForComponent>
    </div>
  )
}

export default ItemWithControl
