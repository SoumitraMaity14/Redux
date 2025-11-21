import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hook";

import { loginfetch, setError } from "./loginSlice";
import loginSlice from './loginSlice'


export const LoginView = () => {
    const [email, setEmail]=useState("")
    // not my chapter anymore
    const [password, setPassword]=useState("")
    
    const dispatch=useAppDispatch() 
    const {user, isAutehnticated, error, loading}=useAppSelector(state=>state.login)

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        dispatch(loginfetch({email, password}))
    }
  return (
    <div>
        <h2>LoginView</h2>
        {error && <button onClick={dispatch(setError(null))}>clear error</button>}
        {isAutehnticated && user &&
            <div>
                {user.name} ({user.role})
                </div>
        }
        <form onSubmit={handleSubmit}>
            <input  type="email" value={email} onChange={(e:any)=>setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e:any)=>setPassword(e.target.value)}/>
            <button type="submit" disabled={loading==="pending"}>{loading==="pending"? "logging in" :"Login"}</button>
        </form>
        
    </div>
  )
}
