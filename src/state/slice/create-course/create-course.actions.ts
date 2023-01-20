import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  notifyError,
  notifySuccess,
} from '../../../common/notifications/notifications'
import { mediaServise } from '../../../services/media/mediaServise.service'

export const deletePhoto = createAsyncThunk(
  'car/deletePhoto',
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
