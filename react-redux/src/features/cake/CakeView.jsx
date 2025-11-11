import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./cakeSlice"


export const CakeView = () => {
    const [value, setValue] = useState(1)
    const numofCakes =useSelector((state)=> state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Num of cakes-{numofCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>Ordered Cake</button>
        <input 
        type="number"
        value={value}
        onChange={e=>setValue(parseInt(e.target.value))}
        />
        <button onClick={()=>dispatch(restocked(value))}>Restocked Cake</button>
    </div>
  )
}
 