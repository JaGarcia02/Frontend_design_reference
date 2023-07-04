import React, { useEffect, useState } from "react";
import {
  check_token,
  logout_user,
  reset,
} from "../redux/features/user/user_slice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import NavBar from "../components/NavBar";
import jwt_decode from "jwt-decode";

const Dashboard = () => {
  const { user, isLoadingUser, isErrorUser, isSuccessUser, messageUser } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="dashboard-main-container">
        <h1>This is dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
