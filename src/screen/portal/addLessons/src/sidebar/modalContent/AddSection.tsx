import { Button, Input, ModalFooter } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../../../../../hooks/useReduxHooks'
import {
  createSection,
  updateSectionName,
} from '../../../../../../state/slice/create-lesson/create-course.actions'
import LayoutForComponent from '../../../../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../../../../ui/Typography'

type Props = {
  onClose: () => void
  value?: string
  onChange?: () => void
  id?: string
  create?: boolean
}

const AddSection = ({
  onClose,
  value = '',
  id,
  onChange,
  create = false,
}: Props) => {
  const { t } = useTranslation('addLessons')
  const [newValue, setNewValue] = useState(value)
  const [isInvalid, setIsInvalid] = useState(false)

  const { replace, asPath } = useRouter()

  const refreshData = () => {
    replace(asPath)
  }

  const dispatch = useAppDispatch()

  const saveTitleSection = () => {
    console.log(newValue.length)
    if (newValue.length < 5) return setIsInvalid(true)

    setIsInvalid(false)

    if (!id) return

    if (!create) {
      dispatch(updateSectionName({ sectionName: newValue, id: id })).then(
        (res) => {
          refreshData()
          onClose()
        }
      )
    } else {
      dispatch(createSection({ sectionName: newValue, id: id })).then((res) => {
        refreshData()
        onClose()
      })
    }
  }

  return (
    <div>
      <Typography className='my-4' type='h3'>
        {t('sectionTitle')}
      </Typography>
      <div>
        <Input
          focusBorderColor='#F6BD61'
          placeholder={`${t('sectionTitle')}`}
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          errorBorderColor='red.200'
          isInvalid={isInvalid}
        />
      </div>

      <ModalFooter className='flex '>
        <div className='flex gap-4'>
          <Button onClick={onClose}>{t('close')}</Button>
          <Button colorScheme={'yellow'} onClick={saveTitleSection}>
            {t('save')}
          </Button>
        </div>
      </ModalFooter>
    </div>
  )
}

export default AddSection
