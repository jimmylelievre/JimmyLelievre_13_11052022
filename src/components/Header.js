import React from "react";
import logo from "../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import UserCircle from "./icons/UserCircle";

const Header = () => {
  return (
    <div className="header">
      <nav className="main-nav">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Argent Bank Logo" />
        </NavLink>

        <ul>
          <NavLink to="/sign-in">
            {" "}
            <UserCircle />
            <li>Sign In</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
