import { createApi, fetchBaseQuery, fetchBasequery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3400' }),
    tagTypes: ['Photo'],
    endpoints: builder => ({})
})