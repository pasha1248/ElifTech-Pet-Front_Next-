/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { useActions } from '../../../../../../hooks/useActions'
import { useAppSelector } from '../../../../../../hooks/useReduxHooks'

interface Props {
  error: boolean
  name: string
}

const BigInput = ({ error, name }: Props) => {
  const { t } = useTranslation('myCourses')
  const { setNameForm } = useActions()

  return (
    <div>
      <input
        type='text '
        value={name}
        onChange={(e) => setNameForm(e.target.value)}
        className={`text-gray-700 w-full text-3xl rounded-2xl  bg-[#F6BD61] p-4 placeholder:text-gray-400 outline-none  ${
          error &&
          'ring-1 ring-purple-500 ring-offset-2 dark:ring-offset-red-500'
        }`}
        placeholder={`${t('cresteTitlePlaceholder')}`}
      />
    </div>
  )
}

export default BigInput
