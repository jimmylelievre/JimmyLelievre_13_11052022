import React, { useState } from "react";
import UserCircle from "./icons/UserCircle";

const SignInContent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  const handleOnChange = () => {
    setIsRemember(!isRemember);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* email && password && dispatch(getToken(email, password, isRemember)); */
  };

  return (
    <div className="background-content">
      <div className="sign-in-content">
        <UserCircle />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
            />
          </div>
          <div className="input-remember">
            <input
              checked={isRemember}
              onChange={handleOnChange}
              type="checkbox"
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInContent;
