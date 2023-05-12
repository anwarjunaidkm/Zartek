import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const dataApi = createAsyncThunk(
    "data/dataApi",
    async ()=>{
        const res= await axios.get("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
        console.log("res.data //////");
        console.log(res.data);
        return res.data
    }
)



const initialState = {
    loading:false,
    dataList:[]

}
export const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{

    },
    extraReducers:{
        [dataApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [dataApi.fulfilled]:(state,action)=>{
            state.loading=false;
            state.dataList = action.payload
            console.log("success");
        },
        [dataApi.rejected]:(state,action)=>{
            state.loading=false;
            console.log("failed");
        },

    }
})

export const {} = dataSlice.actions
export default dataSlice.reducer