import { useState } from 'react'

export const useOpenBurger = ({ init }: { init: boolean }) => {
  const [initialState, setInitialState] = useState(false)

  const toogle = () => {
    setInitialState(!initialState)
  }

  const changeBurger = (el: false | true) => {
    setInitialState(el)
  }

  return { initialState, toogle, changeBurger }
}
