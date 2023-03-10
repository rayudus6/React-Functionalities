import React from 'react';
import {useDispatch} from 'react-redux';
import { generateNumber,addTwo, removeAll } from '../Actions/numbersActions';

const NumbersBtns=(props) =>{
    const dispatch = useDispatch()
    const generate=() =>{
        const num={
            id:Number(new Date()),
            value:Math.round(Math.random() *100)
        }
        dispatch(generateNumber(num))
    }
    const addNumber=() =>{
        dispatch(addTwo())
    }
    return(
        <div>
            <button onClick={generate}>Generate</button>
            <button onClick={addNumber}>+2</button>
            <button onClick={()=>{
                dispatch(removeAll())
            }}>Remove All</button>
        </div>
    )
}

export default NumbersBtns