import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IdleTime = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  const checkForInactivity = () => {
    const expireTime = localStorage.getItem("expireTime");

    if (expireTime < Date.now()) {
      console.log("Log out");
      setLoggedIn(false);
      navigate("/test3");
    }
  };

  const updateExpireTime = () => {
    const expireTime = Date.now() + 5000;

    localStorage.setItem("expireTime", expireTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkForInactivity();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateExpireTime();

    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("mousemove", updateExpireTime);

    return () => {
      window.addEventListener("click", updateExpireTime);
      window.addEventListener("keypress", updateExpireTime);
      window.addEventListener("scroll", updateExpireTime);
      window.addEventListener("mousemove", updateExpireTime);
    };
  }, []);
  return (
    <div>
      <div>
        <h1>Logged in: {loggedIn.toString()}</h1>
      </div>
    </div>
  );
};

export default IdleTime;
