import React from "react";

const Register = () => {
  return (
    <div className="parent-container">
      <div className="child-container">
        <div className="fullname-container">
          <label htmlFor="">Full Name:</label>
          <input type="text" />
        </div>
        <div className="">
          <label htmlFor="">Email:</label>
          <input type="text" />
        </div>
        <div className="">
          <label htmlFor="">Password:</label>
          <input type="text" />
        </div>
        <div className="">
          <label htmlFor="">Confirm Password:</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Register;
