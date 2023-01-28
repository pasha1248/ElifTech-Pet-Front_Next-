import React, { useState } from 'react'
import RatingStars from '../../../../ui/rating/RatingStars'
import { Typography } from '../../../../ui/Typography'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

type Props = {
  user: any
  openFully?: boolean
}

const ItemReviews = ({ user, openFully }: Props) => {
  const [fullText, setFullText] = useState(false)
  const { t } = useTranslation('course')
  return (
    <div className={`${openFully ? 'mb-4' : 'w-[50%] '} my-3 p-1`}>
      <div className='flex justify-between'>
        <img
          className='rounded-full'
          width={70}
          height={70}
          src={user.avatar}
          alt={user.name}
        />
        <div className={`${openFully ? 'mr-40' : ''}`}>
          <Typography type='Ag-18-semibold'> Pavlo I.</Typography>
          <RatingStars forReviews rate={4.3} />
        </div>
        <BsThreeDotsVertical
          className={`${openFully ? 'mr-10' : ''} cursor-pointer`}
        />
      </div>
      <div>
        <Typography className='text-sm' type='Ag-15-medium'>
          {openFully && fullText ? (
            <>{user.description}</>
          ) : (
            <>
              {user.description.split('').splice(0, 100).join('')}
              {user.description.split('').length > 100 ? (
                <span
                  onClick={() => setFullText(!fullText)}
                  className='cursor-pointer text-gray-400'
                >
                  ...{t('openAll')}
                </span>
              ) : (
                '.'
              )}
            </>
          )}
        </Typography>
      </div>
    </div>
  )
}

export default ItemReviews
