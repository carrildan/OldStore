import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        pName: "Jaquetas",
        price: 42,
        img: "shop-1.jpg"
    },
    {
        pName: "Cartera",
        price: 45,
        img: "shop-2.jpg"
    },
    {
        pName: "Vestido",
        price: 38,
        img: "shop-3.jpg"
    },
    {
        pName: "Mezclilla",
        price: 45,
        img: "shop-4.jpg"
    },
    {
        pName: "Botas",
        price: 45,
        img: "shop-5.jpg"
    },
    {
        pName: "Bolsas",
        price: 45,
        img: "shop-6.jpg"
    }
];

const ProductSlice = createSlice({
    name: "Products",
    initialState
})
export default ProductSlice;
