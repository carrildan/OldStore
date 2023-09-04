import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../Category/categorySlice";

export const store = configureStore({
    reducer:{
        categoryReducer : CategorySlice
    }
})