import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment, removeNumber } from '../Actions/numbersActions';

const NumbersList=(props) =>{
    const dispatch=useDispatch()
    const numbers=useSelector((state) =>{
        return state.numbers
    });
    return(
        <div>
            <ul>
                {
                    numbers.map((num) =>{
                        return <li key={num.id}>{num.value}
                        <button onClick={() =>{
                            dispatch(decrement(num.id))
                        }}>-</button>
                        <button onClick={() =>{
                            dispatch(increment(num.id))
                        }}>+</button>
                        <button onClick={() =>{
                            dispatch(removeNumber(num.id))
                        }}>x</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default NumbersList