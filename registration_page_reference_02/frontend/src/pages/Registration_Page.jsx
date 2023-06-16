import { useRef, useEffect, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/Registration_Axios";
const REGISTER_URL = "/register";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,12}/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%]).{8,24}/;

const Registration_Page = () => {
  const userRef = useRef();
  const errorReff = useRef();

  const [user, setUser] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwrodFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatchPassword(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage("");
  }, [user, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrorMessage("INVALID ENTRY PLEASE TRY AGAIN!");
      return;
    }

    // try {
    //   const response = await axios.post(
    //     REGISTER_URL,
    //     JSON,
    //     stringify({ user, password }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(response?.data);
    //   console.log(response?.accessToken);
    //   console.log(JSON.stringify(response));
    //   setSuccess(true);
    // } catch (error) {
    //   if (!error?.response) {
    //     setErrorMessage("No Server Response!");
    //   } else if (error.response?.status === 409) {
    //     setErrorMessage("Username Taken!");
    //   } else {
    //     setErrorMessage("Registration Failed!");
    //   }
    //   errorReff.current.focus();
    // }

    console.log(user, password);
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errorReff}
            className={errorMessage ? "errorMessage" : "offscreen"}
          >
            {errorMessage}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validUsername ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validUsername || !user ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validUsername ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validUsername
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, Numbers, Underscores, Hyphens Allowed.
            </p>

            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="passwordnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="passwordnote"
              className={
                passwrodFocus && !validPassword ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special characters.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_passwrod">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validMatchPassword && matchPassword ? "valid" : "hide"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validMatchPassword || matchPassword ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="text"
              id="confirm_password"
              onChange={(e) => setMatchPassword(e.target.value)}
              value={matchPassword}
              required
              aria-invalid={validMatchPassword ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatchPassword ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button
              disabled={
                !validUsername || !validPassword || !validMatchPassword
                  ? true
                  : false
              }
            >
              Sign up
            </button>
          </form>
          <p>
            Already Registered?
            <br />
            <span className="line">
              <a href="#">Sign In</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Registration_Page;
