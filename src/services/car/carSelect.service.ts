/** @format */

import axios from 'axios'
import api from '../../api/axios'
import { carApi } from '../../api/carApi.axios'
import { IMediaResponse } from './carSelect.interface'

export const mediaServise = {
  async upload(
    media: FormData,
    folder?: string,
    setValue?: (val: number) => void
  ) {
    return api.post<IMediaResponse>('/media', media, {
      params: { folder },
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent)
        const progress = Math.round(
          (progressEvent.loaded * 100) / (progressEvent.total || 0)
        )
        console.log(progress)
        setValue && setValue(Math.ceil(progress))
      },
    })
  },

  async deletePhoto(photo: string, photoUrl: string) {
    return await api.get(`media?photoId=${photo}&photoUrl=${photoUrl}`)
  },
}
