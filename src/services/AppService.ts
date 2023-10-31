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
      query: (page: number = 1, count: number = 10) => ({
        url: `/news/get`,
        params: {
          _page: page,
          _count: count,
        },
      }),
    }),
    getDarkTheme: builder.query<ITheme[], string>({
      query: (name: string = 'dark') => ({
        url: `/theme/get`,
        params: {
          _name: name,
        },
      }),
    }),
    getLightTheme: builder.query<ITheme[], string>({
      query: (name: string = 'light') => ({
        url: `/theme/get`,
        params: {
          _name: name,
        },
      }),
    }),
    getBlueTheme: builder.query<ITheme[], string>({
      query: (name: string = 'blue') => ({
        url: `/theme/get`,
        params: {
          _name: name,
        },
      }),
    }),
  }),
})
