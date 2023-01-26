import { useRouter } from 'next/router'
import React from 'react'
import { IPricePlan } from '../stepTypes'
import styles from './ItemPlan.module.scss'
import { BiCircle } from 'react-icons/bi'
import { Button } from '@chakra-ui/react'
import LayoutForComponent from '../../../../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../../../../ui/Typography'
import { useTranslation } from 'react-i18next'
import { useActions } from '../../../../../../hooks/useActions'
import { useAppSelector } from '../../../../../../hooks/useReduxHooks'

type Props = {
  typePrices: IPricePlan
  ua?: boolean
  en?: boolean
  push: (arg: string) => Promise<boolean>
}

const ItemPlan = ({ push, typePrices, en = false, ua = false }: Props) => {
  const { t } = useTranslation('myCourses')

  const {
    category,
    description,
    level,
    name,
    percent,
    plan,
    questions,
    uploadDataPhoto,
    uploadDataVideo,
  } = useAppSelector((state) => state.createCourseSlice)

  const { createNewCourse } = useActions()
  const changeCurrency = () => {
    if (en) {
      return 'USD'
    }
    if (ua) {
      return 'UAH'
    }
  }

  const createCourse = (plan: string) => {
    const data = {
      category,
      description,
      level,
      name,
      plan: plan,
      uploadDataPhoto: uploadDataPhoto.path,
      uploadDataVideo: uploadDataVideo.path,
      questions,
    }

    createNewCourse({ data, push })
  }

  return (
    <div>
      <LayoutForComponent>
        <div className={styles.card}>
          <div>
            <div></div>

            <div className='text-2xl mt-4 text-center 	 font-medium'>
              <Typography className='text-slate-800' type='h3'>
                {typePrices.title}
              </Typography>
            </div>
            <div className='text-3xl mt-4 text-center mb-4	 font-semibold '>
              <Typography className='text-slate-800' type='h3'>
                {typePrices.price} {typePrices.price >= 0 && changeCurrency()}
              </Typography>
            </div>
            <div>
              <div className=''>
                {typePrices.benefits.map((el, id) => (
                  <div className={styles.list} key={id}>
                    <div>
                      <BiCircle className={styles.icon} />
                    </div>
                    <div>
                      <p className='text-sm text-slate-400 '>{el}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex justify-center mt-8'>
            <Button
              onClick={() => createCourse(typePrices.title)}
              colorScheme={'yellow'}
            >
              {t('choose')}
            </Button>
          </div>
        </div>
      </LayoutForComponent>
    </div>
  )
}

export default ItemPlan
