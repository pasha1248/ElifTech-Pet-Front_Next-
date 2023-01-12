/** @format */

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks/useReduxHooks'
import { Typography } from '../Typography'

interface IProps {
  children?: React.ReactNode
  isOpen: boolean
  onOpen?: () => void
  onClose: () => void
}

const ChakraModal = ({ children, isOpen, onOpen, onClose }: IProps) => {
  const { themeDark } = useAppSelector(state => state.authSlice)
  const { t } = useTranslation('dashboard')
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInRight'>
        <ModalOverlay />
        <ModalContent
          borderRadius={'25px'}
          bgColor={`${!themeDark ? '#FAF8F6' : '#1C1D1F'}`}
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Typography type='Ag-18-semibold'>{t('close')}</Typography>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChakraModal
