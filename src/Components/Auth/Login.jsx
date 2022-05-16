import React from "react";
import { Regi } from "./Common.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Auth/action";
import { useNavigate } from "react-router";
const Login = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData, navigate));
  };
  return (
    <Regi>
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
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
          <button>Submit</button>
        </div>
      </form>
    </Regi>
  );
};

export default Login;
