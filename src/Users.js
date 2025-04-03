import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetUsers } from "./Actions/userActions";
import { SpinnerRoundOutlined } from "spinners-react";

const Users = (props) => {
  const users = useSelector((state) => {
    return state.users;
  });
  const loader = useSelector((state) => {
    return state.loader;
  });
  console.log(loader);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetUsers());
  }, []);
  return (
    <div>
      {loader ? (
        <div className="loader">
          <SpinnerRoundOutlined size={200} />{" "}
        </div>
      ) : (
        <React.Fragment>
          <h2>Users Component --{users.length}</h2>
          <ul>
            {users.map((user, i) => {
              return <li key={user.id}>{user.username}</li>;
            })}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default Users;
