import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { ICard } from '../../../models/ICard'

interface CharactersResponse {
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    }
    results: ICard[]
}

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    tagTypes: ['Card'],
    endpoints: (build) => ({
        fetchAllCards: build.query<CharactersResponse, void>({
            query: () => ({
                url: `/character`,
                params: {},
            }),
            providesTags: (result) => ['Card'],
        }),
    }),
})

export const { useFetchAllCardsQuery } = cardApi
