import React from "react";
import { Regi } from "./Common.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Auth/action";
import { useNavigate } from "react-router";
const Registration = () => {
  const naviagte = useNavigate();
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
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
    dispatch(registerUser(userData, naviagte));
  };
  return (
    <Regi>
      <h3>Register</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="text"
            name="email"
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
          <label>Username :</label>
          <input
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Mobile :</label>
          <input
            type="text"
            name="mobile"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Description :</label>
          <textarea
            name="description"
            id=""
            cols="35"
            rows="8"
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
        </div>
        <div>
          <div></div>
          <button>Submit</button>
        </div>
      </form>
    </Regi>
  );
};

export default Registration;
