import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { DefaultRootStateProps } from 'types';
import { Dispatch } from 'redux';
import { resolveComponentProps } from '@mui/base';
const initialState: DefaultRootStateProps = {
  students: [],
  error: null,
};

const slice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    getStudentsSuccess: (state, action) => {
      console.log(action.payload);
      state.students = action.payload;
    },
    hasError(state, action) {
      state.error = action.payload;
    },
    addStudent: (state, action) => {
      state.students.push({
        id: uuidv4(),
        name: action.payload.name,
        goesBy: action.payload.goesBy,
        currentGrade: 0,
        preferredPronouns: action.payload.preferredPronouns,
      });
    },
  },
});

export default slice.reducer;
