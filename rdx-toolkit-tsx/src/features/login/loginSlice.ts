import {createAsyncThunk, createSlice} from  '@reduxjs/toolkit';
import { useAppSelector, useAppDispatch } from '../../app/Hook';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserProfile{
    name:string,
    email:string,
    role: "admin" | "teacher" | "student"
    lastLogin: number | null
}
interface AuthState{
    user: UserProfile |null,
    isAuthenticated:boolean,
    loading: 'idle' | 'pending' | 'successed' | 'failed',
    error: string |null
}

const initialState:AuthState={
    user:null,
    isAuthenticated:false,
    loading:'idle',
    error:null
}



export const loginfetch= createAsyncThunk( 'login/fetchlogin', async()=>{


    const res= await axios.get('')
})

const loginSlice=createSlice({
    name: "login",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase((state)=>{
            isloggedIn: true
        })
    }
})

