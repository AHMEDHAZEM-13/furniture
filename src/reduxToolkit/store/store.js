import { configureStore } from "@reduxjs/toolkit";
import { getAllProductsReducer } from "../slices/GetAllproducts";

const Store = configureStore ({
    reducer: {
       products: getAllProductsReducer
    },
});
export  {Store};