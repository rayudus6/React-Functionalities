import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const TcsUsers = () => {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(BASE_URL);
        const users = await res.data;
        setUserData(users);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {userdata.map((ele, i) => {
          return (
            <li key={i}>
              <Link to={`/userDetails/${ele.id}`}>{ele.website}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TcsUsers;
