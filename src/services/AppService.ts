import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFeed } from '../models/IFeed.ts'
import { ITheme } from '../models/ITheme.ts'

export const appAPI = createApi({
  reducerPath: 'feedAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://frontappapi.dock7.66bit.ru/api',
  }),
  endpoints: (builder) => ({
    getAllFeeds: builder.query<IFeed[], number>({
      query: (count: number) => ({
        url: `/news/get`,
        params: {
          count: count,
        },
      }),
    }),
    getTheme: builder.query<ITheme, string>({
      query: (name: string) => ({
        url: `/theme/get`,
        params: {
          name: name,
        },
      }),
    }),
  }),
})
