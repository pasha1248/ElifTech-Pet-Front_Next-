/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFormAboutCourseStep1 } from '../../../components/myCourses/createCourse/createCourseForm/steps/stepTypes'
import { deletePhoto } from './create-course.actions'

export interface ICreateCourse {
  uploadDataPhoto: any
  uploadDataVideo: any
  name: string
  category: string
  level: string
  description: string
  percent: any
  plan: string
  questions: { id: number; title: string; answer: string; save: boolean }[]
}

const initialState: ICreateCourse = {
  name: '',
  category: '',
  level: '',
  description: '',
  plan: '',
  uploadDataPhoto: [],
  uploadDataVideo: [],
  percent: 0,
  questions: [
    {
      id: 1,
      title: '',
      answer: '',
      save: false,
    },
  ],
}

export const createCourseSlice = createSlice({
  name: 'create-course',
  initialState,
  reducers: {
    saveUploadDataPhoto(state, action: PayloadAction<any>) {
      state.uploadDataPhoto = action.payload
      console.log(state.uploadDataPhoto)
    },
    saveUploadDataVideo(state, action: PayloadAction<any>) {
      state.uploadDataVideo = action.payload
    },
    uploadPercent(state, action) {
      state.percent = action.payload
    },
    addNewQuestion(state, action) {
      state.questions.push(action.payload)
    },
    saveQuestionData(state, action) {
      for (const object of state.questions) {
        if (object.id === action.payload.id) {
          object.title = action.payload.title
          object.answer = action.payload.answer
          object.save = true
          break
        }
      }
    },
    setNameForm(state, action) {
      state.name = action.payload
    },
    setCategory(state, action) {
      state.category = action.payload
    },
    setLevelForm(state, action) {
      state.level = action.payload
    },
    setDescriptionForm(state, action) {
      state.description = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(deletePhoto.pending, (state) => {})
      .addCase(deletePhoto.fulfilled, (state, action) => {
        if (action.payload === 'video') state.uploadDataVideo = {}
        if (action.payload === 'photo') state.uploadDataPhoto = {}
      })

    //
  },
})

export const {
  saveUploadDataPhoto,
  saveUploadDataVideo,
  saveQuestionData,
  addNewQuestion,
  setNameForm,
  setCategory,
  setLevelForm,
  setDescriptionForm,
} = createCourseSlice.actions

export default createCourseSlice.reducer
