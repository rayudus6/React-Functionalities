//it will start from async or start
import axios from 'axios';

export const startGetUsers=() =>{
    return async (dispatch,getState) =>{
        try{
            const response=await axios.get('https://jsonplaceholder.typicode.com/users')
            const users= await response.data
            console.log(users)
            dispatch(setUsers(users))
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