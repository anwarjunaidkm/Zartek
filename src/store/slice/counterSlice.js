import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    increment: (state,action) => {

      
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
//   value: {},
//   dishvalue:[],
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state,action) => {
//       const  dish_id  = action.payload
//       console.log(dish_id);
//       const item = state.dishvalue.find((item) => item.dish_id === dish_id);
//       if (item) {
//         // item.quantity += 1;
//         // state.value[dish_id]+=0
//         state.value[dish_id] = (state.value[dish_id] || 0) + 1;

//       }
      
//     },
//     decrement: (state,action) => {
//       const  dish_id  = action.payload
//       console.log( state.value[dish_id]);
//       const item = state.dishvalue.find((item) => item.dish_id === dish_id);
//       if (item && state.value[dish_id] > 0) {
//           // item.quantity += 1;
//           // state.value[dish_id]-=0;
//           state.value[dish_id] -= 1;
//         }
//     },
//     dishlist:(state,action)=>{
//       state.dishvalue =action.payload


//     }
//   },
// })
// export const { increment, decrement,dishlist } = counterSlice.actions

// export default counterSlice.reducer




//proxyyyyy



// import { createSlice } from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     value: 0,
//     selectedDishes: {} // object to store dish counts by dish_id
//   },
//   reducers: {
//     increment: (state, action) => {
//       const { dish_id } = action.payload;
//       if (state.selectedDishes[dish_id]) {
//         state.selectedDishes[dish_id]++;
//         console.log(state.selectedDishes,"sample");
//       } else {
//         state.selectedDishes[dish_id] = 1;
//       }
//     },
//     decrement: (state, action) => {
//       const { dish_id } = action.payload;
//       if (state.selectedDishes[dish_id]) {
//         state.selectedDishes[dish_id]--;
//         if (state.selectedDishes[dish_id] === 0) {
//           delete state.selectedDishes[dish_id];
//         }
//       }
//     }
//   }
// });

// export const { increment, decrement,dishlist } = counterSlice.actions

// export default counterSlice.reducer