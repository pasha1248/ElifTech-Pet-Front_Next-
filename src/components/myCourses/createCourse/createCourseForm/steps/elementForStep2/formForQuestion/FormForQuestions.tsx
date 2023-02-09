import { Button, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useActions } from '../../../../../../../hooks/useActions'
import { useAppSelector } from '../../../../../../../hooks/useReduxHooks'
import { Typography } from '../../../../../../../ui/Typography'
import LabelForField from '../../elementForStep1/LabelForField'
import ItemForQuestions from './ItemForQuestions'
import { BsPlusLg } from 'react-icons/bs'

type Props = {}

const FormForQuestions = (props: Props) => {
  const { questions } = useAppSelector((state) => state.createCourseSlice)
  const { addNewQuestion } = useActions()
  const { t } = useTranslation('myCourses')
  return (
    <div>
      <LabelForField label='questionsHead' />

      {questions.map((el) => (
        <div className='mt-6' key={el.id}>
          <ItemForQuestions
            id={el.id}
            title={el.title}
            answer={el.answer}
            saveInit={el.save}
          />
        </div>
      ))}
      <div className='flex justify-end p-4'>
        <Button
          rightIcon={<BsPlusLg color={'rgb(202 138 4)'} />}
          colorScheme={'yellow'}
          variant='outline'
          onClick={() =>
            addNewQuestion({
              id: questions.length + 2,
              title: '',
              answer: '',
              save: false,
            })
          }
        >
          {t('addQuestion')}
        </Button>
      </div>
    </div>
  )
}

export default FormForQuestions
