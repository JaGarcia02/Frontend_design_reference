import React, { useState } from "react";
import image1 from "../images/a7T2CA.jpg";
import axios from "axios";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    // if (loginInput.email == "" && loginInput.email == "") {
    //   alert("Email and Password is required!");
    // } else if (loginInput.email == "") {
    //   alert("Email is required!");
    // } else if (loginInput.password == "") {
    //   alert("Password is required!");
    // }

    axios
      .post("http://localhost:6969/user/api/login-user", {
        email: loginInput.email,
        password: loginInput.password,
      })
      .then((data) => {
        alert("user has logged-in");
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="parent-container">
      <div className="left">
        <img src={image1} alt="" className="picture" />
      </div>
      <div className="right">
        <h1>Welcome User</h1>
        <form onSubmit={login}>
          <div className="input-email">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="email"
              maxLength={25}
              required
              onChange={(e) =>
                setLoginInput({ ...loginInput, email: e.target.value })
              }
            />
          </div>
          <div className="input-password">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="password"
              maxLength={25}
              required
              onChange={(e) =>
                setLoginInput({ ...loginInput, password: e.target.value })
              }
            />
          </div>
          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
