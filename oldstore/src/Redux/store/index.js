import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../Category/categorySlice";
import productSlice from "../Product/productSlice";

export const store = configureStore({
    reducer:{
        categoryReducer : CategorySlice,
        pr : productSlice
    }
})