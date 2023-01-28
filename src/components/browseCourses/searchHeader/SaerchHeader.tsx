import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { FaArrowsAltV } from 'react-icons/fa'
import { AiOutlineCheck } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

type Props = {}

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

const SaerchHeader = (props: Props) => {
  return (
    <div className='flex justify-between m-6'>
      <Select classaName={'bg-yellow-500 text-white'} label={'category'} />
      <Select classaName={''} />
    </div>
  )
}

export function Select(prop: { classaName?: string; label?: string }) {
  const { t } = useTranslation('myCourses')
  const [selected, setSelected] = useState(people[0])

  return (
    <div className=' z-10'>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          {prop.label && <Listbox.Label>{t(prop.label)}:</Listbox.Label>}
          <Listbox.Button
            className={` relative w-full  cursor-default rounded-lg py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ${prop.classaName}`}
          >
            <span className='block text-xl font-medium truncate'>
              {selected.name}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <FaArrowsAltV />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <AiOutlineCheck
                            className='h-5 w-5'
                            aria-hidden='true'
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default SaerchHeader
