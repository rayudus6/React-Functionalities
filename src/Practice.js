import axios from "axios";
import React,{useEffect, useState} from "react";



const Practice  = (props) =>{
    const [userData,setUsers]=useState([]);

    useEffect(() =>{
        fetchUsers();
    },[])
    const fetchUsers= async () =>{
        try{
            const response= await axios.get("https://jsonplaceholder.typicode.com/users")
            const users= await response.data
            setUsers(users)
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <div>
        <h2>Users Component {props.name}--{userData.length}</h2>
        <ul>
            {
                userData.map((user,i) =>{
                    return(
                        <li key={i}>{user.email}</li>
                    )
                })
            }
        </ul>
        </div>
    )
}

export default Practice;