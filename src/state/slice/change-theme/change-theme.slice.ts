import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  themeDark: boolean
}

const initialState: IInitialState = {
  themeDark: false,
}

export const changeThemeSlice = createSlice({
  name: 'change-theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.themeDark = !state.themeDark
    },
  },
})

export const { toggleTheme } = changeThemeSlice.actions

export default changeThemeSlice.reducer
