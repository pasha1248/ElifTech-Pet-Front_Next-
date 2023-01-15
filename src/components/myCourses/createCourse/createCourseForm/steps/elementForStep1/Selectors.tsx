/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Listbox } from '../../../../../../ui/select/SelectHeadles'
import { Typography } from '../../../../../../ui/Typography'
import { RxDotFilled } from 'react-icons/rx'
import LabelForField from './LabelForField'

type Props = {
  control: any
  errors: any
}

const Selectors = ({ control, errors }: Props) => {
  return (
    <div className='flex justify-around gap-3 w-[40%]	'>
      <div className=' flex flex-col w-full'>
        <LabelForField label='category' />

        <Listbox
          control={control}
          rules={{
            validate: (value: any) => {
              return value !== 'Select your'
            },
          }}
          people={[]}
          error={errors.type}
          name={''}
          label={'category'}
        />
      </div>
    </div>
  )
}

export default Selectors
