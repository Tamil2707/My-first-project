import { configureStore } from "@reduxjs/toolkit";
import Datareducer from "./DataSlice"

export const Store=configureStore({
    reducer:{
        data:Datareducer
    }
})