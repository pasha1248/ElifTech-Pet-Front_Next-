/** @format */

import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../ui/Typography'
import TodoItem from './TodoItem'

interface Props {}

const data = [
  {
    id: 1,
    progress: 20,
    name: 'my task',
    tasks: [
      { text: 'add book', completed: true },
      { text: 'add book', completed: true },
      { text: 'add book', completed: false },
    ],
  },
  {
    id: 2,
    progress: 20,
    name: 'my task',
    tasks: [],
  },
  {
    id: 3,
    progress: 20,
    name: 'my task',
    tasks: [
      { text: 'add book', completed: false },
      { text: 'do mew task', completed: false },
      { text: 'redux', completed: true },
    ],
  },
  {
    id: 4,
    progress: 20,
    name: 'my task',
    tasks: [
      { text: 'add book', completed: false },
      { text: 'do mew task', completed: false },
      { text: 'redux', completed: true },
    ],
  },
  {
    id: 5,
    progress: 20,
    name: 'my task',
    tasks: [
      { text: 'add book', completed: false },
      { text: 'do mew task', completed: false },
      { text: 'redux', completed: true },
    ],
  },
]

const Todo = (props: Props) => {
  const { t } = useTranslation('dashboard')
  return (
    <div className='w-full '>
      <div className='py-2 px-4 flex justify-between items-center'>
        <Typography type='h3' className={'font-2xl'}>
          {t('todoList')}
        </Typography>
        <BsFillPlusSquareFill
          size={26}
          color={'#F6BD61'}
          className={'cursor-pointer transition-all	 hover:scale-110	'}
        />
      </div>
      <div
        className='flex flex-wrap p-2 w-full h-[42.3vh]'
        style={{ overflow: 'scroll' }}
      >
        {data.map(el => (
          <TodoItem item={el} key={el.id} />
        ))}
      </div>
    </div>
  )
}

export default Todo
