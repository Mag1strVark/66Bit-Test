import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFeed } from '../models/IFeed.ts'
import { ITheme } from '../models/ITheme.ts'

export const appAPI = createApi({
  reducerPath: 'feedAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://frontappapi.dock7.66bit.ru/api',
  }),
  endpoints: (builder) => ({
    getAllFeeds: builder.query<IFeed[], { page: number; count: number }>({
      query: (arg) => ({
        url: `/news/get`,
        params: {
          page: arg.page,
          count: arg.count,
        },
      }),
    }),
    getDarkTheme: builder.query<ITheme[], string>({
      query: (name: string = 'dark') => ({
        url: `/theme/get`,
        params: {
          name: name,
        },
      }),
    }),
    getLightTheme: builder.query<ITheme[], string>({
      query: (name: string = 'light') => ({
        url: `/theme/get`,
        params: {
          name: name,
        },
      }),
    }),
    getBlueTheme: builder.query<ITheme[], string>({
      query: (name: string = 'blue') => ({
        url: `/theme/get`,
        params: {
          name: name,
        },
      }),
    }),
  }),
})
