import React from 'react'
import { useCurrentCurrency } from '../../hooks/useCurrentCurrency'
import LayoutForComponent from '../../ui/layout/LayoutForComponent'
import RatingStars from '../../ui/rating/RatingStars'
import { Typography } from '../../ui/Typography'
import { ICourse } from '../dashboard/my-course/MyCourse'
import { FaTrashAlt } from 'react-icons/fa'
import ComplexityIcon from '../../ui/icon/copmlexity/ComplexityIcon'
import styles from './Cart.module.scss'
import Image from 'next/image'

type Props = {
  item: any
}

const CartItem = ({ item }: Props) => {
  const { showPrice } = useCurrentCurrency()
  return (
    <div className='mb-3'>
      <LayoutForComponent>
        <div>
          <div className={styles.item}>
            <Image
              loader={(src) => item.imgItem}
              src={item.imgItem}
              alt={item.complexity}
              className={'rounded-2xl '}
              width={'100'}
              height={'100'}
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
