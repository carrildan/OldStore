import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../Category/categorySlice";
import productSlice from "../Product/productSlice";
import cartSlice from "../Cart/cartSlice";

export const store = configureStore({
    reducer:{
        categoryReducer : CategorySlice,
        pr : productSlice,
        cr : cartSlice
    }
})