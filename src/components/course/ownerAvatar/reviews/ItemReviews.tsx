import React from 'react'
import RatingStars from '../../../../ui/rating/RatingStars'
import { Typography } from '../../../../ui/Typography'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

type Props = {
  user: any
}

const ItemReviews = ({ user }: Props) => {
  const { t } = useTranslation('course')
  return (
    <div className='w-[50%] my-2'>
      <div className='flex'>
        <img
          className='rounded-full'
          width={70}
          height={70}
          src={user.avatar}
          alt={user.name}
        />
        <div>
          <Typography type='Ag-18-semibold'> Pavlo I.</Typography>
          <RatingStars forReviews rate={4.3} />
        </div>
        <BsThreeDotsVertical />
      </div>
      <div>
        <Typography className='text-sm' type='Ag-15-medium'>
          {user.description.split('').splice(0, 100).join('')}
          {user.description.split('').length > 100 ? (
            <span className='cursor-pointer text-gray-400'>
              ...{t('openAll')}
            </span>
          ) : (
            '.'
          )}
        </Typography>
      </div>
    </div>
  )
}

export default ItemReviews
