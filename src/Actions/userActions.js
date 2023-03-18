//it will start from async or start
import axios from 'axios';

export const startGetUsers=() =>{
    return async (dispatch,getState) =>{
        try{
            const response=await axios.get('https://jsonplaceholder.typicode.com/users')
            const users= await response.data
            console.log(users)
            setTimeout(()=>{
            dispatch(setUsers(users))
            dispatch(setLoader(false))
            },1000)
        }
        catch(err){
            alert(err)
        }
    }
} 


const setUsers=(users) =>{
    return{
        type:'SET_USERS',
        payload:users
    }
}
export const setLoader=(data) =>{
    return{
        type:'SET_LOADER',
        payload:data
    }
}