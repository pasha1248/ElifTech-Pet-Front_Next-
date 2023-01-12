/** @format */

import {
  CircularProgress,
  CircularProgressLabel,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import styles from './Todo.module.scss'
import { Typography } from '../../../ui/Typography'
import { useTranslation } from 'react-i18next'
import { calculatePercent, calculateTasks } from './todo.helper'
//
import { BsPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import ChakraModal from '../../../ui/modal/ChakraModal'
import ChakraAlertModal from '../../../ui/modal/ChakraAlertModal'
import CreateTask from './CreateTask'
//
type Props = {
  item: any
}

const TodoItem = ({ item }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })

  const { t } = useTranslation('dashboard')
  return (
    <div className={styles.item} onClick={onOpen}>
      <LayoutForComponent>
        <div className={styles.itemContent}>
          <div>
            <CircularProgress
              value={calculatePercent(item.tasks)}
              color='#F6BD61'
              size={'80px'}
              capIsRound
            >
              <CircularProgressLabel>
                <Typography type='Ag-13-medium' className='text-sm'>
                  {calculatePercent(item.tasks).toFixed(1)}%
                </Typography>
              </CircularProgressLabel>
            </CircularProgress>
          </div>
          <div className='flex flex-col justify-between'>
            <Typography type='h3' className='text-2xl '>
              {item.name}
            </Typography>
            <div className='flex '>
              <Typography type='Ag-16-medium' className='text-gray-400 flex'>
                {t('done')}:
              </Typography>
              <Typography type='Ag-16-medium' className='text-gray-800'>
                {calculateTasks(item.tasks)}
              </Typography>
            </div>
          </div>
          <div className='p-1 mr-1 flex flex-col gap-2'>
            <div onClick={e => e.stopPropagation()}>
              <ChakraAlertModal>
                <AiFillDelete
                  size={24}
                  color='#E06262'
                  className='hover:opacity-80'
                />
              </ChakraAlertModal>
            </div>
            <BsPencilFill size={20} color='#8E8E98' />
            <ChakraModal isOpen={isOpen} onClose={onClose}>
              <CreateTask items={item.tasks} />
            </ChakraModal>
          </div>
        </div>
      </LayoutForComponent>
    </div>
  )
}

export default TodoItem
