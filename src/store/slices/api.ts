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
    getTeacherData: builder.query({
      query: (teacherId: string) => `data/${teacherId}.json`,
    }),
    getAllStudentsFromClassId: builder.query({
      query: (classId: string) => `data/${classId}.json`,
    }),
    getStudentDetails: builder.query({
      query: (studentId: string) => `data/${studentId}.json`,
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetTeacherDataQuery,
  useGetAllStudentsFromClassIdQuery,
  useGetStudentDetailsQuery,
} = apiSlice;
