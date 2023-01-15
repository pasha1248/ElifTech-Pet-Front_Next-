/** @format */

import { Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Listbox } from '../../../../../ui/select/SelectHeadles'
import BigInput from './bitInput/BigInput'
import Selectors from './elementForStep1/Selectors'
import LabelForField from './elementForStep1/LabelForField'
import SelectLevel from './elementForStep1/SelectLevel'
import Description from './elementForStep1/Description'

interface Props {
  defaultValue: any
  setFields: any
  increment: any
  decrement: any
}

const Step1General = ({
  defaultValue,
  setFields,
  increment,
  decrement,
}: Props) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    getValues,
    formState: { errors },
  } = useForm<any>({
    mode: 'onChange',
    defaultValues: defaultValue,
  })

  return (
    <div>
      <div>
        <BigInput />
      </div>
      <div>
        <Selectors control={control} errors={errors} />
      </div>
      <div>
        <SelectLevel />
      </div>
      <div>{<Description />}</div>
    </div>
  )
}

export default Step1General
