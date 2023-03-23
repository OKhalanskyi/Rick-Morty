import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { ICard } from '../../../models/ICard'

interface CardResponse {
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    }
    results: ICard[]
}

interface CardParams {
    page: number
    name: string
}

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    tagTypes: ['Card'],
    endpoints: (build) => ({
        fetchAllCards: build.query<CardResponse, CardParams>({
            query: ({ page = 1, name }) => ({
                url: `/character`,
                keepUnusedData: true,
                params: {
                    page: page,
                    name: name,
                },
            }),
            providesTags: (result) => ['Card'],
        }),
        fetchCardById: build.query<ICard, string>({
            query: (id) => ({
                url: `/character/${id}`,
            }),
        }),
    }),
})

export const { useFetchAllCardsQuery, useFetchCardByIdQuery } = cardApi
