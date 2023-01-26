import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import api from '../../../api/axios'
import {
  notifyError,
  notifySuccess,
} from '../../../common/notifications/notifications'
import { mediaServise } from '../../../services/media/mediaServise.service'

export const deletePhoto = createAsyncThunk(
  'course/deletePhoto',
  async ({ type, photoId, photoUrl }: any, thunkAPI) => {
    try {
      const response = await mediaServise.deletePhoto(type, photoId, photoUrl)
      notifySuccess('Photo has been deleted')

      return type
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const createNewCourse = createAsyncThunk(
  'course/createCourse',
  async ({
    data,
    push,
  }: {
    data: any
    push: (arg: string) => Promise<boolean>
  }) => {
    try {
      const res = await api.post('course', data)
      notifySuccess('Course has been created')

      setTimeout(() => {
        push('/my-courses')
      }, 2000)
    } catch (e) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
      }
    }
  }
)
