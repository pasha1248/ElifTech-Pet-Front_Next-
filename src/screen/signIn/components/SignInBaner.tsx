import Image from 'next/image'
import React from 'react'
import relaxImage from '../../../../public/image/imageForSign/relax.svg'
import styles from './SignInBaner.module.scss'

type Props = {}

const SignInBaner = (props: Props) => {
  return (
    <div className={styles.baner}>
      <Image src={relaxImage} alt={'relaxSvg'}></Image>
    </div>
  )
}

export default SignInBaner
