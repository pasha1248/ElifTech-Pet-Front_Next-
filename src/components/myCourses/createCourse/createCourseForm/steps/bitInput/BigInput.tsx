/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {}

const BigInput = (props: Props) => {
  const { t } = useTranslation('myCourses')

  return (
    <div>
      <input
        type='text '
        className='text-gray-700 w-full text-3xl rounded-2xl bg-[#F6BD61] p-4 placeholder:text-gray-500 outline-b'
        placeholder={`${t('cresteTitlePlaceholder')}`}
      />
    </div>
  )
}

export default BigInput
