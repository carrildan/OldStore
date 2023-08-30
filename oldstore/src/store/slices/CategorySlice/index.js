import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Hombres","Mujeres","Niños","Niñas"];

const CategorySlice = createSlice({
    name:"Category",
    initialState
})

export default CategorySlice;