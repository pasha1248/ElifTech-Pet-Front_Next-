/** @format */

import React from 'react'
import RateIconComplexity1 from '../../../ui/icon/RateIconComplexity1'
import RateIconComplexity2 from '../../../ui/icon/RateIconComplexity2'
import RateIconComplexity3 from '../../../ui/icon/RateIconComplexity3'

type Props = {
  type: string
}

const ComplexityIcon = ({ type }: Props) => {
  console.log(type)
  React.useEffect(() => {
    const newFunc = () => {
      if (type === 'complexity') {
        return <RateIconComplexity1 />
      }
      if (type === 'complexity2') {
        return <RateIconComplexity2 />
      }
      if (type === 'complexity3') {
        return <RateIconComplexity3 />
      }
    }
  }, [type])

  return null
}

export default ComplexityIcon
