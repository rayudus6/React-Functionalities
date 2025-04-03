import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SpinnerRoundOutlined } from "spinners-react";

const TcsUser = () => {
  const [userdata, setUserData] = useState({});
  const [loader, setLoader] = useState(true);
  const params = useParams();

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const res = await axios.get(
    //       `https://jsonplaceholder.typicode.com/users/${params.id}`
    //     );
    //     const user = await res.data;
    //     setUserData(user);
    //     setLoader(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData();
    const getData = async () => {
      await axios
        .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(async (res) => {
          const user = await res.data;
          setUserData(user);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [params.id]);
  return (
    <div>
      <h1>User Data</h1>
      {loader ? (
        <div className="loader">
          <SpinnerRoundOutlined size={200} />{" "}
        </div>
      ) : (
        <>
          <ul>
            <li>{userdata.name}</li>
            <li>{userdata.email}</li>
            <li>{userdata.phone}</li>
            <li>{userdata.address.city}</li>
          </ul>

          <span>
            <Link to="/userDetails">Back</Link>
          </span>
        </>
      )}
    </div>
  );
};

export default TcsUser;
