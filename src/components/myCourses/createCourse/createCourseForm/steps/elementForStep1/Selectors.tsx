/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Listbox } from '../../../../../../ui/select/SelectHeadles'
import { Typography } from '../../../../../../ui/Typography'
import { RxDotFilled } from 'react-icons/rx'
import LabelForField from './LabelForField'
import { useActions } from '../../../../../../hooks/useActions'
import { useAppSelector } from '../../../../../../hooks/useReduxHooks'

type Props = {
  error: boolean
  category: string
}

const Selectors = ({ error, category }: Props) => {
  const { setCategory } = useActions()

  return (
    <div className='flex justify-around gap-3 w-[40%]	'>
      <div className=' flex flex-col w-full'>
        <LabelForField label='category' />

        <Listbox
          value={category}
          onChange={setCategory}
          items={['UI/UX', 'Java']}
          error={error}
          label={'category'}
        />
      </div>
    </div>
  )
}

export default Selectors
