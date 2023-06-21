import React, { useState } from "react";

const SignupPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const signup_user = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="signupMainContainer">
        <div className="singupBox">
          <h1>Register Here!</h1>
          <form>
            <div className="nameContainerSignup">
              <label htmlFor="">Full name:</label>
              <input
                type="text"
                required
                onChange={(e) => {
                  setInputs({ ...inputs, name: e.target.value });
                }}
              />
            </div>
            <div className="emailContainerSignup">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                required
                onChange={(e) => {
                  setInputs({ ...inputs, email: e.target.value });
                }}
              />
            </div>
            <div className="passwordContainerSignup">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                required
                onChange={(e) => {
                  setInputs({ ...inputs, password: e.target.value });
                }}
              />
            </div>
            <div className="roleContainerSignup">
              <label htmlFor="">Role:</label>
              <input
                type="text"
                required
                onChange={(e) => {
                  setInputs({ ...inputs, role: e.target.value });
                }}
              />
            </div>
            <button className="signupButton" onClick={signup_user}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
