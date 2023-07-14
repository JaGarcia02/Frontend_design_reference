import React, { useEffect, useState } from "react";
import {
  check_token,
  logout_user,
  reset,
} from "../redux/features/user/user_slice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import Spinner from "../components/Spinner";
import jwt_decode from "jwt-decode";

const NavBar = () => {
  const { user, isLoadingUser, isErrorUser, isSuccessUser, messageUser } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userChannel = new BroadcastChannel("test");
  const token = {
    token: Cookie.get("user_token"),
  };

  const logout = () => {
    dispatch(logout_user());
    navigate("/");
    location.reload();
  };

  useEffect(() => {
    if (isErrorUser) {
      // navigate("/dashboard");
      // location.reload();
    }
    if (isSuccessUser) {
      navigate("/dashboard");
    }
    switch (messageUser) {
      case "Token Expired!":
        alert("Your session has expired, please login again!");
        Cookie.remove("user_token");
        localStorage.removeItem("user");
        navigate("/");
        location.reload();
        break;
    }
    dispatch(reset());
  }, [user, isLoadingUser, isErrorUser, isSuccessUser, messageUser]);

  useEffect(() => {
    userChannel.onmessage = (data) => {
      if (data.data.payload.type === "SIGN_OUT_USER") {
        dispatch(logout_user());
        navigate("/");
        location.reload();
      }
    };
  }, [logout]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!Cookie.get("user_token")) {
        alert("Empty");
        navigate("/");
        location.reload();
      }
      dispatch(check_token(token));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const decoded_token = jwt_decode(Cookie.get("user_token"));

  return (
    <div className="navBar">
      <div className="navBar-child-container">
        <div className="navBar-item1">
          <a href="" className="text-logo">
            {decoded_token.name}
          </a>
        </div>
        <div className="navBar-item2">
          <button disabled={isLoadingUser} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
