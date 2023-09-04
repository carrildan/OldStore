import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: "Hombres",
        items: ["Jaquetas","Cartera","Vestido","Mezclilla","Botas","Bolsas"]
    },
    {
        category: "Mujeres",
        items: ["Jaquetas","Cartera","Vestido","Mezclilla","Botas","Bolsas"]
    },
    {
        category: "Niños",
        items: ["Jaquetas","Cartera","Vestido","Mezclilla","Botas","Bolsas"]
    },
    {
        category: "Niñas",
        items: ["Jaquetas","Cartera","Vestido","Mezclilla","Botas","Bolsas"]
    }
]

const accordionSlice = createSlice({
    name: "AccordionCatSlice",
    initialState
})

export default accordionSlice;