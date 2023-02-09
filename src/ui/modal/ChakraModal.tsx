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
  ligthColorTheme?: string
  blackColorTheme?: string

  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'full'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
}

const ChakraModal = ({
  children,
  isOpen,
  size = 'lg',
  onOpen,
  onClose,
  blackColorTheme = '#1C1D1F',
  ligthColorTheme = '#FAF8F6',
  createNew = false,
  withFrontSide,
}: IProps) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('dashboard')

  let lightColor = ligthColorTheme
  let blackColor = blackColorTheme
  return (
    <>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='slideInRight'
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={'25px'}
          bgColor={`${!themeDark ? lightColor : blackColor}`}
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
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChakraModal
