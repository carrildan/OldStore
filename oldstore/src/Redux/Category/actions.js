import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    "getCategories",
    ()=>{
        const categories = ["Hombres","Mujeres","Niños","Niñas"];
        return categories;
    }
)