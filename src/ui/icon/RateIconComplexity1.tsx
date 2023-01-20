/** @format */

import React, { FC } from 'react'
import { IconContext } from 'react-icons'
import { AiFillSignal } from 'react-icons/ai'

const RateIconComplexity1 = () => {
  return (
    <div>
      <svg width='20' height='20'>
        <defs>
          <linearGradient id='myGradient1' gradientTransform=''>
            <>
              <stop offset='23%' stopColor='#E06262' />
              <stop offset='30%' stopColor='gray' />
              <stop offset='90%' stopColor='gray' />
            </>
          </linearGradient>
        </defs>
        <IconContext.Provider value={{ attr: { fill: "url('#myGradient1')" } }}>
          <AiFillSignal />
        </IconContext.Provider>
      </svg>
    </div>
  )
}

export default RateIconComplexity1
