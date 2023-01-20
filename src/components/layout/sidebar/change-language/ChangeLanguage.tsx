/** @format */

import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const ChangeLanguage = (props: Props) => {
  const { pathname, locale, locales, push } = useRouter()

  const handle = (l: any) => {
    push(`${pathname + '/'}`, undefined, { locale: l })
  }

  return (
    <div>
      {' '}
      {locales?.map(l => (
        <button
          onClick={() => handle(l)}
          className={`${
            locale === l && 'bg-white text-black'
          } text-xl p-2 px-3 rounded-full text-white mr-2`}
          key={l}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default ChangeLanguage
