
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ordered as cakeOrderd } from '../cake/cakeSlice';

type IcecreamType={
    numOfIcecreams: number
}

const initialState: IcecreamType ={
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers:{
        ordered: (state) =>{
            state.numOfIcecreams--
        },
        restocked:(state, action: PayloadAction<number>)=>{
            state.numOfIcecreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']:(state)=>{
    //         state.numOfIcecreams--
    //     }
    // }
    extraReducers:(builder)=>{
        builder.addCase( cakeOrderd, (state)=>{
            state.numOfIcecreams--
        })
    }

})

export default icecreamSlice.reducer;
export const {ordered, restocked} = icecreamSlice.actions