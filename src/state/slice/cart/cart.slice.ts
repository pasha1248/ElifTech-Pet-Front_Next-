import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  cart: any
}

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

export const {} = cartSlice.actions

export default cartSlice.reducer
