/** @format */

import React, { FC, ReactNode } from 'react'

interface Props {
  value?: any
  label?: string
  onChange?: any
  defaultChecked?: false
}

const Switch: FC<Props> = React.forwardRef(
  ({ label, value, onChange, defaultChecked, ...rest }, ref: any) => {
    const [checked, setChecked] = React.useState<boolean>(false)

    //  React.useEffect(() => {
    //    if (onChange) {
    //      onChange(checked)
    //    }
    //  }, [checked])

    return (
      <div onClick={() => setChecked(!checked)}>
        <label className='inline-flex relative items-center cursor-pointer'>
          <input
            ref={ref}
            {...rest}
            className='sr-only peer'
            type='checkbox'
            value={value}
            onChange={e => {
              setChecked(e.target.checked)
            }}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'></span>
        </label>
      </div>
    )
  }
)

export default Switch
