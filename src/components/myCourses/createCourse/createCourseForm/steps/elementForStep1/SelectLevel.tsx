/** @format */

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { plans } from '../dataForSteps'
import LabelForField from './LabelForField'
import { useTranslation } from 'react-i18next'

const SelectLevel = () => {
  const [selected, setSelected] = useState()
  const { t } = useTranslation('dashboard')

  return (
    <div>
      <LabelForField label='level' />
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
        <div className='flex justify-start gap-3	 '>
          {plans.map(plan => (
            <RadioGroup.Option
              key={plan.name}
              value={plan}
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
