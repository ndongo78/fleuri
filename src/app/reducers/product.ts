import { createSlice } from '@reduxjs/toolkit';


const initialState: {
    product:any ,
    cart: any ,
}={
    product:[],
    cart: [],
}

 const productSlice= createSlice({
    initialState,
    name : 'produit',
    reducers:{
        setProducts(state, action){
            return{
                ...state,
                product: action.payload
            }
        },
        setCart(state, action){
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
    }
 });

 export const productState = (state: { produit: any; })=>state.produit
 export const {setProducts, setCart}= productSlice.actions

 export default productSlice.reducer