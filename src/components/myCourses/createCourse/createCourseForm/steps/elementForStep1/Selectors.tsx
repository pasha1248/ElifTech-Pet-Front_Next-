/** @format */

import React from 'react'
import { Listbox } from '../../../../../../ui/select/SelectHeadles'

type Props = {
  control: any
  errors: any
}

const Selectors = ({ control, errors }: Props) => {
  return (
    <div className='flex w-full justify-around	'>
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
      />
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
      />
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
      />
    </div>
  )
}

export default Selectors
