import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      
      state.value += 1
    },
    decrement: (state) => {
      if(state.value > 0){
        state.value -= 1

      }
      
    },
    
  },
})
export const { increment, decrement, } = counterSlice.actions

export default counterSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   counts: {},
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       const { dishId } = action.payload;
//       if (state.counts[dishId]) {
//         state.counts[dishId]++;
//       } else {
//         state.counts[dishId] = 1;
//       }
//     },
//     decrement: (state, action) => {
//       const { dishId } = action.payload;
//       if (state.counts[dishId] > 0) {
//         state.counts[dishId]--;
//       }
//     },
//   },
// })

// export const { increment, decrement } = counterSlice.actions

// export default counterSlice.reducer
