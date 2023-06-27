import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const cookie = Cookies.get("user-access-token");
  const localToken = localStorage.getItem("userInfo");
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const logout_user = () => {
    alert("Logout");
  };

  useState(() => {
    const interval = setInterval(() => {
      if (!cookie) {
        console.log("no token!");
        // navigate("/");
        // location.reload();
      } else {
        console.log(cookie);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={logout_user}>Logout</button>
    </div>
  );
};

export default Dashboard;
