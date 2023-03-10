import React, { useEffect }from "react";
import { useSelector,useDispatch } from "react-redux";
import { startGetUsers } from "./Actions/userActions";


const Users=(props) =>{
    const users=useSelector((state) =>{
        return state.users
    })
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(startGetUsers())
    },[])
    return(
        <div>
            <h2>Users Component --{users.length}</h2>
            <ul>
                {
                    users.map((user,i)=>{
                        console.log(i)
                        return <li key={user.id}>{user.email}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users