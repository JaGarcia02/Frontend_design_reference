import React, { useEffect, useState } from "react";
import { logout_user, reset } from "../redux/features/user/user_slice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, isLoadingUser, isErrorUser, isSuccessUser, messageUser } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isErrorUser) {
      alert("Error");
    }
    if (isSuccessUser) {
      alert("Logout successfull!");
      navigate("/");
      location.reload();
    }
    dispatch(reset());
  }, [user, isLoadingUser, isErrorUser, isSuccessUser, messageUser]);

  const logout = () => {
    dispatch(logout_user());
  };
  return (
    <div>
      <h1>This is dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
