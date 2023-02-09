import { Input, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { ICourseProps } from '../../../../../../../../../pages/my-courses/add-lessons/[id]'
import ChakraModal from '../../../../../../../../ui/modal/ChakraModal'
import AddSection from '../../../../sidebar/modalContent/AddSection'
import styles from './CustomUi.module.scss'

type Props = {
  course: ICourseProps
}

const ManualInput = ({ course }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [text, setText] = useState(' ')
  const [toggle, setToggle] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)

  return (
    <div className='flex justify-center flex-col items-center gap-2'>
      <div
        className='w-full '
        onKeyDown={(e) => e.code === 'Space' && e.stopPropagation()}
      >
        <ChakraModal isOpen={isOpen} onClose={onClose}>
          <AddSection value={course.name} onClose={onClose} id={course.id} />
        </ChakraModal>

        <div className='text-2xl text-center'>{course.name}</div>
      </div>
      <div>
        <div>
          <AiTwotoneEdit
            onClick={() => {
              setToggle(!toggle)
              onOpen()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ManualInput
