/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFormAboutCourseStep1 } from '../../../components/myCourses/createCourse/createCourseForm/steps/stepTypes'

export interface ICreateLesson {
  lessons: unknown
}

const initialState: ICreateLesson = {
  lessons: [],
}

export const createLessonSlice = createSlice({
  name: 'create-lesson',
  initialState,
  reducers: {},
})

export const {} = createLessonSlice.actions

export default createLessonSlice.reducer
