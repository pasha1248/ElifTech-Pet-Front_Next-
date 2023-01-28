import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ChakraModal from '../../../../ui/modal/ChakraModal'
import ItemReviews from './ItemReviews'
import RateFilterForm from './ui/RateFilterForm'
import styles from './ModalForAllReviews.module.scss'

type Props = {
  data: any
}

const ModalForAllReviews = ({ data }: Props) => {
  const { t } = useTranslation('course')
  return (
    <div className='p-4'>
      <div className={styles.container}>
        <div className=''>
          <RateFilterForm />
        </div>
        <div className=''>
          {data.map((el: any) => (
            <ItemReviews openFully user={el} />
          ))}
        </div>
      </div>
      <div>
        <hr />
        <div className='flex justify-center p-5'>
          <Button colorScheme='yellow' variant='link'>
            {t('showMore')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ModalForAllReviews
