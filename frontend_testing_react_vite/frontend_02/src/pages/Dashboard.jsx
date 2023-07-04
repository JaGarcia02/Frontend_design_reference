import React, { useEffect, useState } from "react";
import {
  check_token,
  logout_user,
  reset,
} from "../redux/features/user/user_slice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

const Dashboard = () => {
  const { user, isLoadingUser, isErrorUser, isSuccessUser, messageUser } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = {
    token: Cookie.get("user_token"),
  };
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(check_token(token));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    dispatch(logout_user());
    navigate("/");
    location.reload();
  };

  return (
    <div>
      <h1>This is dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
