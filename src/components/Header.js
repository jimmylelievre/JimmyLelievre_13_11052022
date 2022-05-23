import React from "react";
import logo from "../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import UserCircle from "./icons/UserCircle";
import SignOut from "./icons/SignOut";
import { useDispatch } from "react-redux";
import { userLogout } from "../feature/auth.slice";

const Header = ({ user, name }) => {
  const dispatch = useDispatch();

  /**
   * Disconnects the user and close session
   */
  const signOut = () => {
    dispatch(userLogout());
    localStorage.clear();
  };

  return (
    <div className="header">
      <nav className="main-nav">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Argent Bank Logo" />
        </NavLink>

        <ul>
          {user ? (
            <div className="link">
              <UserCircle />
              <li>{name}</li>

              <NavLink onClick={signOut} to="/">
                {" "}
                <SignOut />
                <li>Sign Out</li>
              </NavLink>
            </div>
          ) : (
            <NavLink to="/login">
              {" "}
              <UserCircle />
              <li>Sign In</li>
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
