const numbersInitialValue=[];

const numbersReducer=(state=numbersInitialValue,action) =>{
    switch(action.type){
        case 'GENERATE_NUMBER' : {
            return [...state,{...action.payload}]
        }
        case 'ADD_TWO':{
            return state.map((num)=>{
                return{
                    ...num,
                    value:num.value+2
                }
            })
        }
        case 'REMOVE_ALL': {
            return numbersInitialValue
        }
        case 'INCREMENT':{
            return state.map((ele)=>{
                if(ele.id===action.payload){
                    return{
                        ...ele,
                        value:ele.value+1
                    }
                }else{
                    return {...ele}
                }
            })
        }
        case 'DECREMENT':{
            return state.map((ele) =>{
                if(ele.id===action.payload){
                    return{
                        ...ele,
                        value:ele.value - 1
                    }
                }else{
                    return { ...ele}
                }
            })
        }
        case 'REMOVE_NUMBER':{
            return state.filter((ele) =>{
                return ele.id !== action.payload
            })
        }
        default:{
            return [...state]
        }
    }
}


export default numbersReducer