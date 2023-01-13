/** @format */

import { Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsPlusSquareFill } from 'react-icons/bs'
import { Typography } from '../../../ui/Typography'
import styles from './Todo.module.scss'
import SmallItem from './todoModal/SmallItem'

interface Props {
  items?: any
}

const CreateTask = ({ items }: Props) => {
  console.log(items)
  const [searchTerm, setSearchTerm] = useState('')

  const { t } = useTranslation('dashboard')
  return (
    <div className='w-full'>
      <input
        type='text'
        className='w-full text-gray-400 p-2 text-2xl font-medium outline-[#F6BD61]	bg-transparent'
        placeholder={`${t('title')}`}
      />
      <hr />
      <div>
        <div className={`flex gap-4 my-4 cursor-pointer ${styles.addButton}`}>
          <BsPlusSquareFill size={24} color='#F6BD61' />

          <Typography type={'h3'} className={'text-gray-500'}>
            {t('addTask')}
          </Typography>
        </div>
        <div className=''>
          <div>
            {items &&
              items.map((task: any, id: number) => (
                <SmallItem key={id} task={task} />
              ))}
          </div>

          <Input
            variant='flushed'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder={`${t('writeTaskPlaceholder')}`}
            focusBorderColor='#F6BD61'
            textColor={'gray.400'}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateTask
