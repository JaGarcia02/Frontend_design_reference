import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const cookie = Cookies.get("user-access-token");
  const localToken = localStorage.getItem("userInfo");
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const logout_user = () => {
    alert("Logout");
  };

  useState(() => {
    const interval = setInterval(() => {
      cookie;
      console.log(cookie);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useState(() => {
    const interval = setInterval(() => {
      if (cookie == null) {
        console.log("empty");
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={logout_user}>Logout</button>
    </div>
  );
};

export default Dashboard;
