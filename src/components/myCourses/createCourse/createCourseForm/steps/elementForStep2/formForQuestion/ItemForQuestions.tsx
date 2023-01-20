import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  Textarea,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LayoutForComponent from '../../../../../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../../../../../ui/Typography'
import LabelForField from '../../elementForStep1/LabelForField'
import { CiSaveDown1 } from 'react-icons/ci'
import { GrEdit } from 'react-icons/gr'
import { AiTwotoneDelete } from 'react-icons/ai'
import { useAppSelector } from '../../../../../../../hooks/useReduxHooks'
import { useActions } from '../../../../../../../hooks/useActions'

type Props = {
  id: number
  title: string
  answer: string
  saveInit: boolean
}

const ItemForQuestions = ({ id, title, answer, saveInit }: Props) => {
  const [titleQuestion, setTitleQuestion] = useState(title)
  const [descriptionQuestion, setDescriptionQuestion] = useState(answer)
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  const [save, setSave] = useState(saveInit)
  const { saveQuestionData } = useActions()

  const saveQuestionInRedux = () => {
    saveQuestionData({
      id: id,
      title: titleQuestion,
      answer: descriptionQuestion,
    })
    setSave(true)
  }

  const { t } = useTranslation('myCourses')

  return (
    <LayoutForComponent>
      {!save ? (
        <div className='p-4'>
          <div>
            <Typography className='my-3' type='Ag-18-semibold'>
              {t('headQuestionName')}
            </Typography>

            <Input
              variant='flushed'
              value={titleQuestion}
              onChange={(e) => setTitleQuestion(e.target.value)}
              placeholder={`${t('pleceholderForQuestions')}`}
              focusBorderColor='#F6BD61'
              textColor={`${themeDark ? 'gray.400' : 'gray.600'}`}
              maxLength={150}
            />
          </div>
          <div>
            <div>
              <Typography type='Ag-18-semibold' className='my-3'>
                {t('headAnswer')}
              </Typography>
            </div>
            <div>
              <Textarea
                borderColor={'gray.200'}
                textColor={`${themeDark ? 'gray.300' : 'gray.600'}`}
                focusBorderColor={'#F6BD61'}
                borderWidth={'medium'}
                value={descriptionQuestion}
                onChange={(e) => setDescriptionQuestion(e.target.value)}
                placeholder='...'
              />
            </div>
          </div>
          <div>
            <Button
              size={'lg'}
              className={'my-4'}
              onClick={saveQuestionInRedux}
              rightIcon={<CiSaveDown1 />}
              colorScheme='yellow'
            >
              {t('save')}
            </Button>
          </div>
        </div>
      ) : (
        <div className='flex justify-between items-center p-4'>
          <Accordion defaultIndex={[1]} allowMultiple className='w-[70%]'>
            <AccordionItem defaultChecked={false}>
              <h2>
                <AccordionButton
                  defaultChecked={false}
                  textColor={`${themeDark ? 'gray.300' : 'gray.600'}`}
                >
                  <Box as='span' flex='1' textAlign='left'>
                    {titleQuestion}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                textColor={`${themeDark ? 'gray.300' : 'gray.600'}`}
                pb={4}
              >
                {descriptionQuestion}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <div className='flex gap-2'>
            <Button
              size={'sm'}
              className={'my-4'}
              onClick={() => setSave(false)}
              rightIcon={<GrEdit />}
              colorScheme='yellow'
            ></Button>
            <Button
              size={'sm'}
              className={'my-4'}
              onClick={() => setSave(true)}
              rightIcon={<AiTwotoneDelete />}
              colorScheme='red'
            ></Button>
          </div>
        </div>
      )}
    </LayoutForComponent>
  )
}

export default ItemForQuestions
