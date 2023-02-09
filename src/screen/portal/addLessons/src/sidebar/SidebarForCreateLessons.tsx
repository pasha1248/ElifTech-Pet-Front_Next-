import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ICourseProps } from '../../../../../../pages/my-courses/add-lessons/[id]'
import ChakraModal from '../../../../../ui/modal/ChakraModal'
import AddSection from './modalContent/AddSection'

type Props = {
  course: ICourseProps
}

const SidebarForCreateLessons = ({ course }: Props) => {
  console.log('course', course)
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { t } = useTranslation('addLessons')
  return (
    <div>
      <div className='flex flex-col justify-center gap-3'>
        <ChakraModal isOpen={isOpen} onClose={onClose}>
          <AddSection onClose={onClose} id={course.id} create />
        </ChakraModal>

        <Button onClick={onOpen} size={'lg'}>
          {t('addSection')}
        </Button>
        <Button size={'lg'} colorScheme={'yellow'}>
          {t('addLesson')}
        </Button>
      </div>
    </div>
  )
}

export default SidebarForCreateLessons
