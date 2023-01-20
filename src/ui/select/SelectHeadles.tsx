/** @format */

import { useController, UseControllerProps } from 'react-hook-form'

import { Listbox as ListBox, Transition } from '@headlessui/react'
import { Fragment } from 'react'
// @ts-ignore

import styles from './Select.module.scss'
import classNames from 'classnames'
import { IoIosArrowDown } from 'react-icons/io'
import { Typography } from '../Typography'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks/useReduxHooks'

type Props = {
  items: string[] | IFetchDataModleCar[] | any
  error?: any
  onClick?: any
  model?: boolean
  liters?: boolean
  label?: string
}

export interface IFetchDataModleCar {
  id: number
  make: string
  model: string
  type: string
  year: number
}

export const Listbox = (props: any) => {
  const { t } = useTranslation('myCourses')
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  const { items, error, value, onChange, onClick, label } = props
  console.log(error)
  console.log(value)

  return (
    <div className='w-full '>
      <ListBox value={value} onChange={onChange}>
        <div
          className={classNames(styles.select, {
            [styles.errorField]: error,
          })}
        >
          <ListBox.Button
            className={classNames(styles.selectButton, {
              [styles.dark]: themeDark,
            })}
          >
            {value ? value : t('selectCategory')}
            <IoIosArrowDown size={26} />
          </ListBox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListBox.Options className='absolute mt-1 z-10 top-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {items.length !== 0 ? (
                items.map((item: any) => (
                  <ListBox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-400 text-white' : 'text-gray-900'
                      }`
                    }
                    onClick={() => onClick && onClick(item)}
                  >
                    {`${item} `}
                  </ListBox.Option>
                ))
              ) : (
                <div
                  className={`relative cursor-default select-none py-2 pl-10 pr-4 `}
                >
                  Nothing
                </div>
              )}
            </ListBox.Options>
          </Transition>
        </div>
      </ListBox>
    </div>
  )
}
