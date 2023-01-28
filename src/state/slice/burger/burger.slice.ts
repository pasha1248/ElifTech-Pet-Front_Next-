/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFormAboutCourseStep1 } from '../../../components/myCourses/createCourse/createCourseForm/steps/stepTypes'

export interface IBurger {
  openBurger: boolean
}

const initialState: IBurger = {
  openBurger: false,
}

export const changeBurgerSlice = createSlice({
  name: 'create-course',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.openBurger = !state.openBurger
    },
  },
})

export const { toggleSidebar } = changeBurgerSlice.actions

export default changeBurgerSlice.reducer
