/** @format */

import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAppSelector } from '../../hooks/useReduxHooks'

interface Props {}

const HeaderForMyCourses = (props: Props) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('myCourses')
  return (
    <div>
      <div>
        <Button
          colorScheme={`${themeDark ? 'orange' : 'orange'}`}
          _hover={{ backgroundColor: 'gray.100' }}
          variant='outline'
          rightIcon={<AiOutlinePlus />}
        >
          {t('clreateCourseButton')}
        </Button>
      </div>

      <Link href={'my-courses/create-course'}>
        <Button
          colorScheme={`${themeDark ? 'orange' : 'orange'}`}
          _hover={{ backgroundColor: 'gray.100' }}
          variant='outline'
          rightIcon={<AiOutlinePlus />}
        >
          {t('clreateCourseButton')}
        </Button>
      </Link>
    </div>
  )
}

export default HeaderForMyCourses
