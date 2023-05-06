import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import dataReducer from './slice/dataSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data:dataReducer
  },
})