import React, { useEffect, useState } from "react";
import image1 from "../images/a7T2CA.jpg";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { login_user, reset } from "../redux/features/user/user_slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, isLoadingUser, isErrorUser, isSuccessUser, messageUser } =
    useSelector((state) => state.user);

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isErrorUser) {
      alert("Error");
    }
    if (isSuccessUser) {
      alert("Success");
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isLoadingUser, isErrorUser, isSuccessUser, messageUser]); // user is the response

  const login = (e) => {
    e.preventDefault();

    const user_data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    dispatch(login_user(user_data));

    /* Using Axios */
    // if (loginInput.email == "" && loginInput.email == "") {
    //   alert("Email and Password is required!");
    // } else if (loginInput.email == "") {
    //   alert("Email is required!");
    // } else if (loginInput.password == "") {
    //   alert("Password is required!");
    // }

    // axios
    //   .post("http://localhost:6969/user/api/login-user", {
    //     email: loginInput.email,
    //     password: loginInput.password,
    //   })
    //   .then((data) => {
    //     alert("user has logged-in");
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
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

          <button disabled={isLoadingUser} className="btn-login" type="submit">
            Login
          </button>
        </form>
        <a href="/register" className="register-link">
          Register here!
        </a>
      </div>
    </div>
  );
};

export default Login;
