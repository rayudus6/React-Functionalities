import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";


const Count=(props) =>{
    const [count,setCount]=useState(0);
    // const params = useParams()
    console.log("params ===>",props)

    useEffect(() =>{
        const res=JSON.parse(localStorage.getItem('number')) || 0
        setCount(res)
    },[])

    useEffect(() =>{
        localStorage.setItem('number',JSON.stringify(count))
    },[count])

     const handleIncrement=() =>{
         setCount(count+1)
     }
     const handleDecrement=() =>{
         setCount(count -1)
     }
     const handleReset=() =>{
         setCount(0)
     }
    return(
        <div>
            <h2>Count--{count}</h2>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Count