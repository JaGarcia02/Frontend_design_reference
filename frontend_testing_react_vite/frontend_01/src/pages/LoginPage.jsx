import React, { useState } from "react";

const LoginPage = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const login_user = (e) => {
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
