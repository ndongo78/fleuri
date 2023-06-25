import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState ={
    user: null,
    isLogin: false,
}
const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
})


export default authSlice.reducer;