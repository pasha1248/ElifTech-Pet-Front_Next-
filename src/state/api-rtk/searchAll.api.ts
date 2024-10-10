/** @format */

import { api } from './api-rtk'

export const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBySearchTerm: builder.query<any[], string>({
      query: (searchTerm) => ({ url: `/${'search'}`, params: { searchTerm } }),
      providesTags: () => [{ type: 'Profile' }],
    }),
  }),
})
