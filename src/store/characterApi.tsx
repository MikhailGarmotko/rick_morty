import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl:'https://rickandmortyapi.com/api/character/',
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<any, void>({
      query: () => ``,
    })
  })
});

export const {useGetCharactersQuery} = characterApi;