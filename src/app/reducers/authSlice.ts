import { createSlice } from '@reduxjs/toolkit';


const initialState ={
    user: null,
    isLogin: false,
    token: null,
}
const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
})


export const authUser= (state: { user: any; })=>state.user

export default authSlice.reducer;