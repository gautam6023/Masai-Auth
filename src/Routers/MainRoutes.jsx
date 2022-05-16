import Registration from "../Components/Auth/Registration";
import Login from "../Components/Auth/Login";
import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "../Components/Dashboard";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
