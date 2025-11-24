import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface UserProfile{
    name:string;
    email:string;
    role: "admin" | "teacher" | "student";
    lastLogin: number |null
}

interface RegisterState{
    user: UserProfile | null;
    loading: 'idle' | 'pending' | 'successed' | 'failed'
    error: string |null

}

const initialState:RegisterState={
    user: null,
    loading:'idle',
    error: null
}

export const registerFetch=createAsyncThunk<UserProfile, {name: string; email:string; password:string; role:"admin" | "teacher" | "student";}>(
    'register/fetch', 
    async(formData)=>{
        const res= await axios.post('/register', formData)
        return res.data
    })
const registerSlice=createSlice({
    name: "register",
    initialState,
    reducers:{
        clearRegisterState:(state)=>{
            state.user=null;
            state.loading= 'idle'
            state.error=null
        },
        setRegisterError: (state, action:PayloadAction<string |null>)=>{
            state.error=action.payload
        }

    },
    extraReducers:(builder)=>{
        builder
         .addCase(registerFetch.pending,  (state)=>{
            state.loading='pending'
         })
         .addCase(registerFetch.fulfilled, (state, action)=>{
            state.loading='successed'
            state.user=action.payload
            state.error=null
         })
         .addCase(registerFetch.rejected, (state, action)=>{
            state.loading='failed'
            state.user=null
            state.error=action.error.message || "Registration failed"
         })
    }
    
    
})

export default registerSlice.reducer
export const {clearRegisterState, setRegisterError}=registerSlice.actions
