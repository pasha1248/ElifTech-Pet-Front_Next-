/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../slice/user-slice/user.interface'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Article', 'Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    credentials: 'include',
  }),

  endpoints: (builder) => ({
    getProfile: builder.query<IUser, any>({
      query: () => `${'user'}/profile`,
      providesTags: () => [{ type: 'Profile' }],
    }),
    subscribeToUser: builder.mutation<boolean, string>({
      query: (channelId) => ({
        url: `${'user'}/subscribe/${channelId}`,
        method: 'PATCH',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
  }),
})
