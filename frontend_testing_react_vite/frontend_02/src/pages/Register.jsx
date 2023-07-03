import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register_user, reset } from "../redux/features/user/user_slice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user, isLoadingUser, isErrorUser, isSuccessUser, messageUser } =
    useSelector((state) => state.user);
  const [registerInput, setRegisterInput] = useState({
    name: "",
    email: "",
    password: "",
    confirm_passwrod: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isErrorUser) {
      alert("Error");
    }
    if (isSuccessUser || user) {
      alert("Success");
      navigate("/");
    }
    dispatch(reset());
  }, [user, isLoadingUser, isErrorUser, isSuccessUser, messageUser]);

  const register = (e) => {
    e.preventDefault();

    if (registerInput.password !== registerInput.confirm_passwrod) {
      alert("Password didn't match!");
    }

    const register_data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };

    dispatch(register_user(register_data));
  };
  return (
    <div className="parent-container">
      <div className="child-container">
        <h1>Sign up here.</h1>
        <form onSubmit={register} action="">
          <div className="fullname-container">
            <label htmlFor="">Full Name:</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              required
              onChange={(e) =>
                setRegisterInput({ ...registerInput, name: e.target.value })
              }
            />
          </div>
          <div className="email-container">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              onChange={(e) =>
                setRegisterInput({ ...registerInput, email: e.target.value })
              }
            />
          </div>
          <div className="password-container">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) =>
                setRegisterInput({ ...registerInput, password: e.target.value })
              }
            />
          </div>
          <div className="confirm-password-container">
            <label htmlFor="">Confirm Password:</label>
            <input
              type="password"
              placeholder="Re-type your password"
              required
              onChange={(e) =>
                setRegisterInput({
                  ...registerInput,
                  confirm_passwrod: e.target.value,
                })
              }
            />
          </div>
          <button disabled={isLoadingUser} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
