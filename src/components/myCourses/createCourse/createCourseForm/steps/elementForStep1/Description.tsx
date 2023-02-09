/** @format */

import React from 'react'
import TextArea from '../../../../../../ui/text-area/TextArea'
import LabelForField from './LabelForField'
import LayoutForComponent from '../../../../../../ui/layout/LayoutForComponent'
import { useActions } from '../../../../../../hooks/useActions'

interface Props {
  description: string
  error: string | boolean
  long: boolean
}

const Description = ({ description, long = false, error }: Props) => {
  const { setDescriptionForm } = useActions()
  return (
    <div>
      <LabelForField label='description'></LabelForField>

      <LayoutForComponent>
        <TextArea
          onChange={setDescriptionForm}
          withEditor
          long
          error={error}
          description={description}
        />
      </LayoutForComponent>
    </div>
  )
}

export default Description
