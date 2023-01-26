import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaStar, FaUsers, FaPlayCircle } from 'react-icons/fa'
import { Typography } from '../../../ui/Typography'
import styles from './OwnerAvatar.module.scss'

type Props = {}

const OwnerDescription = (props: Props) => {
  const { t } = useTranslation('course')
  return (
    <div>
      <div className='flex gap-2'>
        <img
          src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png'
          alt=''
          className='rounded-full'
          height={140}
          width={140}
        />
        <div>
          <Typography className='text-xl m-2' type='h3'>
            Ivash Pasha
          </Typography>
          <ul className={styles.list}>
            <li>
              <Typography
                className='flex text-gray-500 items-center gap-4'
                type='Ag-18-semibold'
              >
                <FaStar /> 2 {t('instructorRating')}
              </Typography>
            </li>
            <li>
              <Typography
                className='flex text-gray-500 items-center gap-4'
                type='Ag-18-semibold'
              >
                <FaUsers /> 3 {t('students')}
              </Typography>
            </li>
            <li>
              <Typography
                className='flex text-gray-500 items-center gap-4'
                type='Ag-18-semibold'
              >
                <FaPlayCircle /> 2 {t('courses')}
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OwnerDescription
