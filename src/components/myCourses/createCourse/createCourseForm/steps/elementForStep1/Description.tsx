/** @format */

import React from 'react'
import TextArea from '../../../../../../ui/text-area/TextArea'
import LabelForField from './LabelForField'
import dynamic from 'next/dynamic'
import LayoutForComponent from '../../../../../../ui/layout/LayoutForComponent'
import { useActions } from '../../../../../../hooks/useActions'

interface Props {
  description: string
  error: string | boolean
}

const Description = ({ description, error }: Props) => {
  const { setDescriptionForm } = useActions()
  return (
    <div>
      <LabelForField label='description'></LabelForField>

      <LayoutForComponent>
        <TextArea
          onChange={setDescriptionForm}
          withEditor
          error={error}
          description={description}
        />
      </LayoutForComponent>
    </div>
  )
}

export default Description
