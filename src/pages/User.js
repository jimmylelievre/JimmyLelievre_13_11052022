import React from "react";
import Header from "../components/Header";

const User = () => {
  return (
    <div>
      <Header user="user" name="Tony" />
      <div className="background-content">
        <div className="user">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button class="edit-button">Edit Name</button>
        </div>
      </div>
    </div>
  );
};

export default User;
