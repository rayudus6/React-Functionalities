import React, { useState, useEffect } from "react";


const List = (props) =>{
  const [list,setList]=useState([]);
  const [word,setWord]=useState("");
  const [filter,setFiltered]=useState([]);
  const [error,setError]=useState({});

  useEffect(() =>{
    const result=JSON.parse(localStorage.getItem('list')) || []
    setList(result)
  },[])

  useEffect(() =>{
    localStorage.setItem('list',JSON.stringify(list))
    const filterData=list.filter((task) =>{
      return task.strike;
    })
    setFiltered(filterData);
  },[list])

  const handleChange = (e) =>{
    setWord(e.target.value)
    setError({})
  } 

  const handleSubmit = (e) =>{
    e.preventDefault();
    const err={}
    if(word.length >0){
    const data={
      id:Number(new Date()),
      name:word,
      strike:false
    }
    const add=[data,...list]
    setList(add);
  }else{
    err.name="Enter the name"
  }
  setError(err) 
  }
  const handleToggle = (id) =>{
    const listData=list.map((ele) =>{
        if(id===ele.id){
          ele.strike= !ele.strike;
        }
      return ele
      // return ele.id !== id;
    })
    setList(listData);
    
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={word} onChange={handleChange}/>
        <input type="submit" value="save" />
      </form>
      <p style={{color:"red"}}>{error.name}</p>
      <p>We have {list.length} items with underline of{filter.length}</p>
      <ul>
          {
            list.map((listdata) =>{
              return <li 
              key={listdata.id} 
              onClick={() => handleToggle(listdata.id)}
              style={{textDecorationLine:listdata.strike ? "line-through" : "inherit",cursor:"pointer"}}
              >
                {listdata.name}
              </li>
            })
          }
      </ul>
    </>
  )

}

export default List;