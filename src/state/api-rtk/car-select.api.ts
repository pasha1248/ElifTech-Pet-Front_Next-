/** @format */

import { IUser } from '../slice/user-slice/user.interface'
import { api } from './api-rtk'

export const carSelectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query<IUser, any>({
      query: () => `${'user'}/profile`,
      providesTags: () => [{ type: 'Profile' }],
    }),
    createCar: builder.mutation<any, any>({
      query: (formData) => ({
        url: `car`,
        body: formData,
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
  }),
})
