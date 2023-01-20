/** @format */

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { plans } from '../dataForSteps'
import LabelForField from './LabelForField'
import { useTranslation } from 'react-i18next'
import { useActions } from '../../../../../../hooks/useActions'

const SelectLevel = ({ level, error }: { level: string; error: boolean }) => {
  const { t } = useTranslation('dashboard')
  const { t: t1 } = useTranslation('myCourses')
  const { setLevelForm } = useActions()

  return (
    <div>
      <LabelForField label='level' />
      <RadioGroup value={level} onChange={setLevelForm}>
        <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
        <div className='flex justify-start gap-3	 '>
          {plans.map((plan) => (
            <RadioGroup.Option
              key={plan.name}
              value={plan.name}
              className={({ active, checked }) =>
                `${
                  active
                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                    : ''
                }
                  ${
                    checked
                      ? 'bg-[#F6BD61] bg-opacity-75 text-white'
                      : 'bg-[#FAF8F6]'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className='flex w-full items-center justify-between'>
                    <div className='flex items-center'>
                      <div className='text-sm flex items-center gap-4'>
                        <RadioGroup.Label
                          as='p'
                          className={`font-medium ${
                            checked ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {t(plan.name)}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as='span'
                          className={` ${
                            checked ? 'text-sky-100' : 'text-gray-500'
                          }`}
                        >
                          <span>
                            {plan.name === 'complexityAll' ? (
                              <plan.icon color={'#E06262'} size={30} />
                            ) : (
                              <plan.icon size={30} />
                            )}
                          </span>
                        </RadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className='ml-4 text-white'>
                        <CheckIcon className='h-6 w-6' />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      {error && (
        <div className={'bsolute -bottom-5 left-0 w-full text-red-500'}>
          {t1('errorForSelect')}
        </div>
      )}
    </div>
  )
}

function CheckIcon(props: any) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function CheckBoxItem() {
  const [] = useState()
}

export default SelectLevel
