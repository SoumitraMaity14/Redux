import { useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./icecreamSlice"
export const IcecreamView = () => {

    const [value, setValue]=useState(1)
    const nummofIcecreams=useSelector(state=> state.icecream.numOfIcecreams)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Num of icecreams- {nummofIcecreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Ordered Icecream</button>
        <input
        type="number"
        value={value}
        onChange={e=>setValue(parseInt(e.target.value))}
        />
        <button onClick={()=>dispatch(restocked(value))}>Restocked Icecream</button>
    </div>
  )
}
