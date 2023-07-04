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

  const token = {
    token: Cookie.get("user_token"),
  };
  useEffect(() => {
    if (isErrorUser) {
      navigate("/dashboard");
      location.reload();
    }
    if (isSuccessUser) {
      alert("Logout User");
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isLoadingUser, isErrorUser, isSuccessUser, messageUser]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!Cookie.get("user_token")) {
        alert("Empty");
        navigate("/");
      }
      dispatch(check_token(token));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    dispatch(logout_user());
    navigate("/");
    location.reload();
  };

  // if (isLoadingUser) {
  //   return <Spinner />;
  // }
  const decoded_token = jwt_decode(Cookie.get("user_token"));

  return (
    <div className="navBar">
      <div className="nav-container">
        <header>
          <a href="" className="text-logo">
            {decoded_token.name}
          </a>
          <div className="button-navbar">
            {Cookie.get("user_token") ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <button>Login</button>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
