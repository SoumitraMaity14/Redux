import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../app/Hook';


export const RegisterView = () => {
    const dispatch = useAppDispatch()
    

   const handlesubmit=()=>{

   }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type='text'   />
            


        </form>
    </div>
  )
}
