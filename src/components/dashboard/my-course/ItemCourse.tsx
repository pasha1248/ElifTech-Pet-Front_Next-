/** @format */

import { Progress } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { IconContext } from 'react-icons'
import { AiFillSignal } from 'react-icons/ai'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import RateIconComplexity1 from '../../../ui/icon/RateIconComplexity1'
import RateIconComplexity2 from '../../../ui/icon/RateIconComplexity2'
import RateIcon from '../../../ui/icon/RateIconComplexity2'
import RateIconComplexity3 from '../../../ui/icon/RateIconComplexity3'
import { Typography } from '../../../ui/Typography'
import UserAvatar from '../../user.avatar/UserAvatar'
import ComplexityIcon from './Complexity'
import { ICourse } from './MyCourse'
import styles from './MyCourse.module.scss'

interface Props {
  item: ICourse
}

const ItemCourse = ({ item }: Props) => {
  const { t: translate } = useTranslation('dashboard')
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  return (
    <>
      <div>
        <div className='relative'>
          <img src={item.imgItem} alt='' className='rouded-3xl' />
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
        </div>
      </div>
    </>
  )
}

export default ItemCourse
