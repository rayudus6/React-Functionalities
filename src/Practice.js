import axios from "axios";
import React, { useEffect, useState } from "react";
import { SpinnerRoundOutlined } from "spinners-react";

const Practice = (props) => {
  console.log(props);
  const [userData, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
      );
      const users = await response.data;
      setUsers(users);
      setLoader(false);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <div className="div-center">
        <div
          style={{
            width: "300px",
            height: "100px",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <h2 style={{ fontSize: "72px" }}>{props.name}</h2>
        </div>
      </div>
      {error ? (
        <h2 className="error" style={{ color: "red" }}>
          Getting Api Error
        </h2>
      ) : (
        <div>
          {loader ? (
            <div className="loader">
              <SpinnerRoundOutlined size={200} />
            </div>
          ) : (
            <React.Fragment>
              <h2>Users--{userData.length}</h2>
              <table className="customerTable">
                <thead>
                  <tr>
                    {Object.keys(userData[0]).map((data, i) => {
                      return <th key={i}>{data}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {userData.map((data, i) => {
                    return (
                      <tr key={i}>
                        {Object.values(data).map((value, i) => {
                          return <td key={i}>{value}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export default Practice;
