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
            const exist= state.cart.find((c: { _id: string; }) => c._id === action.payload._id)
            return{
                ...state,
                cart: !exist ? [...state.cart, {...action.payload,qty:1}] :  [{...action.payload,qty:exist.qty +1}]
            }
        },
         addQty  (state, action)  {
            const exist= state.cart.find((c: { _id: string; }) => c._id === action.payload._id)
             if(exist){
                exist.qty +=1;
             }
        },
         removeQty (state, action)  {
            const exist= state.cart.find((c: { _id: string; }) => c._id === action.payload._id)
            if(exist && exist.qty != 1){
                exist.qty -= 1;
            }
        },
        deleteFromCart(state,action){
            const newCart= state.cart.filter((c: { _id: string; }) => c._id != action.payload._id)
            return {
                ...state,
                cart: newCart
            }
        }
    }
 });

 export const productState = (state: { produit: any; })=>state.produit
 export const {setProducts, setCart, addQty ,removeQty,deleteFromCart}= productSlice.actions

 export default productSlice.reducer