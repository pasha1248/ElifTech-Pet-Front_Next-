import { createSlice } from '@reduxjs/toolkit'

interface Ilikethis {
  name: 'UAH' | 'USD'
  price: number
}

const PriceUsd = {
  price: 1,
}
const PriceUah = {
  price: 41,
}

interface IInitialState {
  currency: 'USD' | 'UAH'
}

const initialState: IInitialState = {
  currency: 'USD',
}

export const currencySlice = createSlice({
  name: 'change-theme',
  initialState,
  reducers: {
    showPrice(state, actions) {
      if (actions.payload.name === 'USD') {
        return actions.payload.price
      }
      if (actions.payload.name === 'USD') {
        const result = actions.payload.name
        return
      }
    },
  },
})

export const {} = currencySlice.actions

export default currencySlice.reducer
