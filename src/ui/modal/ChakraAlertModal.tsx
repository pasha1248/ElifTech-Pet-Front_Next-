/** @format */

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks/useReduxHooks'
import { Typography } from '../Typography'

interface IProps {
  children: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  cancelRef?: any
}

const ChakraAlertModal = ({ children }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('dashboard')

  const cancelRef = React.useRef<any>()

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            borderRadius={'25px'}
            bgColor={`${!themeDark ? '#FAF8F6' : '#1C1D1F'}`}
          >
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              <Typography type='h3'>{t('delete')}</Typography>
            </AlertDialogHeader>

            <AlertDialogBody>
              {' '}
              <Typography type='h3'>{t('sure?')}</Typography>
            </AlertDialogBody>

            <AlertDialogFooter>
              <button ref={cancelRef} onClick={onClose}>
                <Typography type='h3'>{t('close')}</Typography>
              </button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                <Typography type='Ag-18-semibold' className='text-[#E06262]'>
                  {t('delete')}
                </Typography>
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default ChakraAlertModal
