import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import Cookie from "js-cookie";
import axios from "axios";

const LoginPage = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const login_user = async (e) => {
    e.preventDefault();

    if (inputs.email == "" && inputs.password == "") {
      console.log("Enter your email & password!");
      alert("Enter your email & password!");
    } else if (inputs.email == "") {
      console.log("Enter your email!");
      alert("Enter your email!");
    } else if (inputs.password == "") {
      console.log("Enter your password!");
      alert("Enter your password!");
    } else {
      const res = await login(inputs).unwrap();
      dispatch(setCredentials({ ...res }));
      Cookie.set("user-access-token", userInfo.payload.token);
      navigate("/");
    }
  };
  return (
    <>
      <div className="loginMainContainer">
        <div className="loginBox">
          <h1>Welcome</h1>
          <form>
            <div className="emailContainer">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                placeholder="email. . ."
                required
                onChange={(e) => {
                  setInputs({ ...inputs, email: e.target.value });
                }}
              />
            </div>
            <div className="passwordContainer">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                placeholder="password. . ."
                required
                onChange={(e) => {
                  setInputs({ ...inputs, password: e.target.value });
                }}
              />
            </div>
            <button className="loginButton" onClick={login_user}>
              Login
            </button>
          </form>
          <a className="linkSignup" href="/signup">
            Create account here
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
