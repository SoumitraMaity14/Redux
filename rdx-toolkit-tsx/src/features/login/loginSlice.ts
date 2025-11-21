import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useAppSelector, useAppDispatch } from '../../app/Hook';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserProfile {
    name: string,
    email: string,
    role: "admin" | "teacher" | "student"
    lastLogin: number | null
}
interface AuthState {
    user: UserProfile | null,
    isAuthenticated: boolean,
    loading: 'idle' | 'pending' | 'successed' | 'failed',
    error: string | null
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: 'idle',
    error: null
}



export const loginfetch = createAsyncThunk<UserProfile, {email:string; password:string}> ('login/fetchlogin', async(credentials) => {


    const res = await axios.post('/login',credentials);
    return res.data
})

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setAuthState: ((state, action: PayloadAction<UserProfile | null>) => {
            state.user = action.payload,
                state.isAuthenticated = !!action.payload,
                state.loading = 'idle',
                state.error = ''
        }),
        logout: (state) => {
            state.user = null,
                state.isAuthenticated = false,
                state.loading = 'idle',
                state.error = null
        },
        setError: (state, action:PayloadAction<string | null>) => {
            state.error=action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginfetch.pending, (state) => {
            state.loading='pending'
            state.error=null
            
        })
        .addCase(loginfetch.fulfilled, (state, action:PayloadAction<UserProfile>)=>{
            state.loading="successed"
            state.user=action.payload
            state.isAuthenticated=true
            state.error=null

        })
        .addCase(loginfetch.rejected,(state, action)=>{
            state.loading='failed'
            state.user=null
            state.isAuthenticated=false
            state.error=(action.payload as string) || "Login failed"
        })
    }
    
})

export default loginSlice.reducer
export const {setError,setAuthState, logout }=loginSlice.actions
