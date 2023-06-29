import React from "react";
import { useDispatch } from "react-redux";
// login is the action and state of the function that is in the reducers in the slice
import { login, logout } from "../features/userSlice.js";

const Login = () => {
  // this is required, useDispatch will be responsible to of modifying the state and action
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            // this is hard coded
            login({ name: "Ja Garcia", age: 25, email: "ja02@email.com" })
            // the object inside of the login is the value of the slice
          )
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
