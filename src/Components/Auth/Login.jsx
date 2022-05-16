import React from "react";
import { Regi } from "./Common.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Auth/action";
import { useNavigate } from "react-router";
const Login = () => {
  const [userData1, setUserData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state);
  const { userData } = isAuth;
  // if (isAuth) {
  //   let { username, name, mobile, email } = isAuth.userData;
  // }
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({
      ...userData1,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData1, navigate));
  };
  return (
    <>
      <Regi>
        {!isAuth.token ? (
          <form className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div>
              <label>Username :</label>
              <input
                type="text"
                name="username"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div>
              <label>Password :</label>
              <input
                type="text"
                name="password"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div>
              <div></div>
              <button className="button">Submit</button>
            </div>
          </form>
        ) : (
          <div>
            <div>
              <p>Name : {userData.name}</p>
              <p>Email : {userData.email}</p>
              <p>Username : {userData.username}</p>
              <p>Mobile No. {userData.mobile}</p>
              <p>Description : {userData.description}</p>
              <button className="button" onClick={() => navigate("/dashboard")}>
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </Regi>
    </>
  );
};

export default Login;
