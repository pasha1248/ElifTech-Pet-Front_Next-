/** @format */

import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import baner from '../../../../public/image/baner.jpg'
import { Typography } from '../../../ui/Typography'
import styles from './Baner.module.scss'

interface Props {}

const Baner = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Image src={baner} alt={'baner'} className={'rounded-3xl'} />
      <div className={styles.content}>
        <Typography type='h2' className='text-2xl font-semibold'>
          Platform for eweryone
        </Typography>
        <Typography type='h2' className='text-lg font-medium'>
          This section for our news
        </Typography>
        <button></button>
      </div>
    </div>
  )
}

export default Baner
