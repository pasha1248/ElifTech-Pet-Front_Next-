import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import api from '../../../api/axios'
import {
  notifyError,
  notifySuccess,
} from '../../../common/notifications/notifications'
import { mediaServise } from '../../../services/media/mediaServise.service'

export const createSection = createAsyncThunk(
  'course/createSection',
  async (
    { sectionName, id }: { sectionName: string; id: string },
    thunkAPI
  ) => {
    console.log(sectionName, id)
    try {
      const response = await api.get(
        `lessons/create-section?section=${sectionName}&id=${id}`
      )
      notifySuccess('Section has been created')

      return response.data
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const updateSectionName = createAsyncThunk(
  'course/createSection',
  async (
    { sectionName, id }: { sectionName: string; id: string },
    thunkAPI
  ) => {
    try {
      const response = await api.get(
        `lessons/update-sectionName?section=${sectionName}&id=${id}`
      )
      notifySuccess('Section has been updated')

      return response.data
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
