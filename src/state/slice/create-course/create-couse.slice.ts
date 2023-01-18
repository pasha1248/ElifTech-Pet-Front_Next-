/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICreateCourse {
  uploadDataPhoto: any
  uploadDataVideo: any
  percent: any
}

const initialState: ICreateCourse = {
  uploadDataPhoto: [],
  uploadDataVideo: [],
  percent: 0,
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
  },
})

export const { saveUploadDataPhoto, saveUploadDataVideo } =
  createCourseSlice.actions

export default createCourseSlice.reducer
