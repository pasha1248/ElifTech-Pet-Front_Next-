/** @format */

import { Checkbox } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Typography } from '../../../../ui/Typography'

interface Props {
  task: any
}

const SmallItem = ({ task }: Props) => {
  const [check, setCheck] = useState(false)

  return (
    <div className='flex gap-2 p-3 '>
      <Checkbox
        isChecked={check}
        onChange={() => setCheck(!check)}
        size={'lg'}
        color={'#F6BD61'}
        colorScheme={'yellow'}
        outline={'none'}
      ></Checkbox>
      <div className={`${check && 'line-through'}`}>
        <Typography type='Ag-16-medium'>{task.text}</Typography>
      </div>
    </div>
  )
}

export default SmallItem
