import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StudentProps } from 'types';

type StudentsResponse = StudentProps[];

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003' }),
  endpoints: (builder) => ({
    getAllStudents: builder.query<StudentsResponse, void>({
      query: () => '',
    }),
  }),
});

export const { useGetAllStudentsQuery } = apiSlice;
