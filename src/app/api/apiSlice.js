import { createApi, fetchBaseQuery, fetchBasequery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://photoreact-api.onrender.com/' }),
    tagTypes: ['Photo'],
    endpoints: builder => ({})
})