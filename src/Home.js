import React from "react";
import { useSelector } from "react-redux";
import NumberForm from "./Components/NumberForm";
import NumbersBtns from "./Components/NumbersBtns";
import NumbersList from "./Components/NumbersList";


const Home=(props) =>{
    const numbers=useSelector((state) =>{
        return state.numbers
    })
const findSum=() =>{
    let sum=0;
    numbers.forEach((ele) => {
        sum=sum+ele.value
    });
    return sum;
}
    return(
        <div>
            <h1>Hello Team  </h1>
            <h2>Length:{numbers.length},sum{findSum()}</h2>

            <NumbersList />
            <NumbersBtns />
            <NumberForm />
        </div>
    )
}

export default Home