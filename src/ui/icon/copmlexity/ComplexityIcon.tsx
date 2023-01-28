import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import { Typography } from '../../Typography'
import RateIconComplexity1 from '../RateIconComplexity1'
import RateIconComplexity3 from '../RateIconComplexity3'

type Props = {
  translationPageL?: 'cart' | string
  complexity: string
}

const ComplexityIcon = ({ translationPageL, complexity }: Props) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('cart')

  const changeColor = () => {
    if (!themeDark) {
      return 'bg-gray-200'
    } else {
      return 'bg-gray-200'
    }
  }
  return (
    <div>
      <div
        className={`flex w-min justify-center	 gap-2 items-center p-1 px-2 rounded-3xl ${changeColor()}`}
      >
        <div className='text-sm font-bold'>{t(complexity)}</div>
        <div>
          {complexity === 'complexity1' && <RateIconComplexity1 />}
          {complexity === 'complexity3' && <RateIconComplexity3 />}
          {complexity === 'complexity2' && <RateIconComplexity3 />}
        </div>
      </div>
    </div>
  )
}

export default ComplexityIcon
