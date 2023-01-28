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
  createNew?: boolean
  withFrontSide?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | '2xl' | '3xl'
}

const ChakraModal = ({
  children,
  isOpen,
  size = 'lg',
  onOpen,
  onClose,
  createNew = false,
  withFrontSide,
}: IProps) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('dashboard')
  return (
    <>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='slideInRight'
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={'25px'}
          bgColor={`${!themeDark ? '#FAF8F6' : '#1C1D1F'}`}
        >
          {createNew && (
            <ModalHeader>
              <Typography type='h3'>{t('titleForCreateTasks')}</Typography>
            </ModalHeader>
          )}
          <ModalCloseButton
            colorScheme={`${themeDark ? '#FAF8F6' : '#1C1D1F'}`}
            color={`${themeDark ? '#FAF8F6' : '#1C1D1F'}`}
          />
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
