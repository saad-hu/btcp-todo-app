import { configureStore } from '@reduxjs/toolkit';
import shouldLoginReducer from '../features/shouldLogin/shouldLoginSlice';

export const store = configureStore({
  reducer: {
    shouldLogin:shouldLoginReducer
  },
});
