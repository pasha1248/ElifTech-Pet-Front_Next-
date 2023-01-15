/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { RxDotFilled } from 'react-icons/rx'
import { Typography } from '../../../../../../ui/Typography'

type Props = {
  label: string
}

const LabelForField = ({ label }: Props) => {
  const { t } = useTranslation('myCourses')

  return (
    <label className='m-2 my-4 flex '>
      <RxDotFilled color='#F6BD61' />
      <Typography type='Ag-18-semibold'>{t(label)}</Typography>
    </label>
  )
}

export default LabelForField
