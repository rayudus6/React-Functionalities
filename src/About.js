import React, {useEffect, useState} from "react";


const About=(props) =>{
    const [count,setCount]=useState(0);

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

export default About