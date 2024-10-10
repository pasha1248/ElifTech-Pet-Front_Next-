/** @format */

import { FormLabel, Stack, Switch } from '@chakra-ui/react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks'
import { toggleTheme } from '../../state/slice/change-theme/change-theme.slice'

const Toggle = () => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const dispatch = useAppDispatch()

  return (
    <div className=''>
      <Stack direction='row'>
        <Switch
          colorScheme='orange'
          aria-label='day'
          size='lg'
          defaultChecked={themeDark}
          onChange={() => dispatch(toggleTheme())}
        />
      </Stack>
    </div>
  )
}
export default Toggle
