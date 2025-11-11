import { useState } from "react"

// import { useSelector, useDispatch } from "react-redux"
import {useAppSelector, useAppDispatch} from "../../app/Hook"
import { ordered, restocked } from "./icecreamSlice"
export const IcecreamView = () => {

    const [value, setValue]=useState(1)
    const nummofIcecreams=useAppSelector(state=> state.icecream.numOfIcecreams)
    const dispatch=useAppDispatch()
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
