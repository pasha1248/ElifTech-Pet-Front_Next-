/** @format */

import React, { FC } from 'react'
import { IconContext } from 'react-icons'
import { AiFillSignal } from 'react-icons/ai'

interface Props {
  type?: string
  width?: string
  height?: string
}

const RateIconComplexity2 = ({ width = '20', height = '20' }: Props) => {
  console.log('')
  return (
    <div>
      <svg width={width} height={height}>
        <defs>
          <linearGradient id='myGradient' gradientTransform=''>
            <>
              <stop offset='70%' stopColor='#E06262' />
              <stop offset='30%' stopColor='gray' />
            </>
          </linearGradient>
        </defs>
        <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" } }}>
          <AiFillSignal />
        </IconContext.Provider>
      </svg>
    </div>
  )
}

export default RateIconComplexity2
