/** @format */

import React from 'react'
import TextArea from '../../../../../../ui/text-area/TextArea'
import LabelForField from './LabelForField'
import dynamic from 'next/dynamic'

interface Props {}

const Description = (props: Props) => {
  return (
    <div>
      <LabelForField label='description'></LabelForField>
      <TextArea withEditor />
    </div>
  )
}

export default Description
