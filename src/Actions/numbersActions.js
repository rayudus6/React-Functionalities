export const generateNumber=(number)=>{
    return {
        type:'GENERATE_NUMBER',
        payload:number
    }
}
export const addTwo=()=>{
    return{
        type:'ADD_TWO'
    }
}
export const removeAll=() =>{
    return{
        type:'REMOVE_ALL'
    }
}

export const increment=(id) =>{
    return{
        type:'INCREMENT',
        payload:id
    }
}
export const decrement=(id) =>{
    return{
        type:'DECREMENT',
        payload:id
    }
}
export const removeNumber=(id) =>{
    return{
        type:'REMOVE_NUMBER',
        payload:id
    }
}