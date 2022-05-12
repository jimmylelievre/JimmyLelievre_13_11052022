import React from "react";
import UserCircle from "./icons/UserCircle";

const SignInContent = () => {
  return (
    <div className="background-content">
      <div class="sign-in-content">
        <UserCircle />
        <h1>Sign In</h1>
        <form>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>

          <button class="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInContent;
