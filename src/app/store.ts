import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productApi";
import { authApi } from "./api/authApi";
import { setupListeners } from '@reduxjs/toolkit/query';
import  authSlice from './reducers/authSlice'


export const store= configureStore({
    reducer:{
        auth: authSlice,
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(authApi.middleware, productApi.middleware)
})

setupListeners(store.dispatch);