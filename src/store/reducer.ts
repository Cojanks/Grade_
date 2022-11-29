import { combineReducers } from 'redux';
import { apiSlice } from './slices/api';

import studentReducer from './slices/student';

const reducer = combineReducers({
  student: studentReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default reducer;
