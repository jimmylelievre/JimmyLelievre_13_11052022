import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../feature/auth.slice";
import UserCircle from "./icons/UserCircle";
import { Navigate } from "react-router-dom";
import { useLogged } from "../components/Auth";
import { setPassword } from "../feature/user.slice";
import { setUserName } from "../feature/user.slice";
import { postLogin } from "../utils/apiRequest";

/**
 * Show the form and the content for the login page
 */

const SignInContent = () => {
  const password = useSelector((state) => state.user.password);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useLogged();

  /**
   * when the user submit, do a http post login with data then get token and stock token
   * @param {Event} e
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(username, password)
      .then((res) => {
        dispatch(userLogin(res.data.body.token));
        localStorage.setItem("token", res.data.body.token);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          document.getElementById("error-message").innerHTML =
            err.response.data.message;
        }
      });
  };
  if (logged) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="background-content">
      <div className="sign-in-content">
        <UserCircle />
        <h1>Sign In</h1>
        <span id="error-message"></span>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => dispatch(setUserName(e.target.value))}
              type="text"
              id="username"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => dispatch(setPassword(e.target.value))}
              type="password"
              id="password"
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInContent;
