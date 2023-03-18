import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl:process.env.REACT_APP_HOST,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<any, void>({
      query: () => ``,
    })
  })
});

export const {useGetCharactersQuery} = characterApi;