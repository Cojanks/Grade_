import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'store/constant';
import { StudentProps } from 'types';

type StudentsResponse = StudentProps[];

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllStudents: builder.query<StudentsResponse, void>({
      query: () => 'data/classData.json',
    }),
  }),
});

export const { useGetAllStudentsQuery } = apiSlice;
