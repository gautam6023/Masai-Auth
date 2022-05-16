import React, { useEffect } from "react";
import { Navbar } from "./Auth/Common.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serachUser } from "../Redux/Auth/action";
const Dashboard = () => {
  const { users } = useSelector((state) => state.isAuth);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const searchUser = () => {
    dispatch(serachUser(name, 1));
  };

  return (
    <>
      <Navbar>
        <div>
          <input
            type="text"
            name="search"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search user"
            required
          />
          <button onClick={searchUser}>Search</button>
        </div>
        <div></div>
      </Navbar>
      <div>
        {users?.map((el) => {
          return <h1 key={el.id}>{el.login}</h1>;
        })}
      </div>
    </>
  );
};

export default Dashboard;
