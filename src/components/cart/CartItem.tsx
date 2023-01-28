import React from 'react'
import { useCurrentCurrency } from '../../hooks/useCurrentCurrency'
import LayoutForComponent from '../../ui/layout/LayoutForComponent'
import RatingStars from '../../ui/rating/RatingStars'
import { Typography } from '../../ui/Typography'
import { ICourse } from '../dashboard/my-course/MyCourse'
import { FaTrashAlt } from 'react-icons/fa'
import ComplexityIcon from '../../ui/icon/copmlexity/ComplexityIcon'
import styles from './Cart.module.scss'

type Props = {
  item: ICourse
}

const CartItem = ({ item }: Props) => {
  const { showPrice } = useCurrentCurrency()
  return (
    <div className='mb-3'>
      <LayoutForComponent>
        <div>
          <div className={styles.item}>
            <img
              src={item.imgItem}
              alt={item.complexity}
              className={'rounded-2xl '}

              // width={'40%'}
            />
            <div className='flex flex-col'>
              <Typography type='h3' className=' text-start'>
                {item.name}ewmgklwenntnenwnfweklnfkewnlkengwelkng
                aslmf;skanfkasfn
              </Typography>
              <Typography
                className='text-gray-400 font-light text-start'
                type='Ag-16-medium'
              >
                {' '}
                {item.category}
              </Typography>
              <ComplexityIcon complexity={item.complexity} />
              <RatingStars rate={5} />
            </div>
            <div className='h-[90%]'>
              <FaTrashAlt />
            </div>
            <div className='text-xl font-semibold  h-[93%]'>
              {showPrice({ price: 13.99 })}
            </div>
          </div>
        </div>
      </LayoutForComponent>
    </div>
  )
}

export default CartItem
