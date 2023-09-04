import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initialState = {
    categories : [],
    status : "idle",
    error : ""
}

const CategorySlice = createSlice({
    name:"Category",
    initialState,
    reducers:{},
    extraReducers:{
        [getCategories.pending] : (state,action)=>{
            state.status = "Loading...";
        },
        [getCategories.fulfilled] : (state,action)=>{
            state.status = "Success";
            state.categories = action.payload;
        },
        [getCategories.rejected] : (state,action)=>{
            state.state = "Rejected";
            state.error = action.error.message;
        }
    }
})

export default CategorySlice.reducer;