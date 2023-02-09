import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ICourseProps } from '../../../../../../../../pages/my-courses/add-lessons/[id]'
import { useAppSelector } from '../../../../../../../hooks/useReduxHooks'
import LayoutForComponent from '../../../../../../../ui/layout/LayoutForComponent'
import ChakraModal from '../../../../../../../ui/modal/ChakraModal'
import AddLessonForm from './addLesson/AddLessonForm'
import styles from './LessonItems.module.scss'
import ManualInput from './ui/ManualInput'

type Props = {
  course: ICourseProps
  number: number
  totalCount: number
}

const LessonItem = ({ course, number, totalCount }: Props) => {
  const { t } = useTranslation('addLessons')
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <div className={`${totalCount !== number && styles.containerForLine}`}>
      <LayoutForComponent style={{ border: '2px solid #ECC94A' }}>
        <Accordion
          // defaultIndex={[0]}
          defaultChecked={false}
          allowMultiple
          className={styles.item}
        >
          <AccordionItem className={styles.item2} defaultChecked={false}>
            <h2>
              <AccordionButton
                className={styles.button}
                defaultChecked={false}
                textColor={`${themeDark ? 'gray.300' : 'gray.800'}`}
              >
                <Box as='span' flex='1' textAlign='left'>
                  <div
                    className={styles.icon}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ManualInput course={course} />
                    <Button
                      size='md'
                      border='2px'
                      backgroundColor={'transparent'}
                      _hover={{ bg: 'yellow.200' }}
                      borderColor='yellow.400'
                      onClick={onOpen}
                    >
                      {t('addLesson')}
                    </Button>{' '}
                    <ChakraModal
                      ligthColorTheme='#E3E4E8'
                      blackColorTheme='#8E8E98'
                      size='6xl'
                      isOpen={isOpen}
                      onClose={onClose}
                    >
                      <AddLessonForm />
                    </ChakraModal>
                  </div>
                </Box>
                <div className={styles.iconContainer}>
                  <AccordionIcon
                    className={styles.icon}
                    style={{ fontSize: '50px' }}
                  />
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel
              textColor={`${themeDark ? 'gray.300' : 'gray.600'}`}
              pb={4}
            >
              <hr />
              {'sfs'}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </LayoutForComponent>
    </div>
  )
}

export default LessonItem
