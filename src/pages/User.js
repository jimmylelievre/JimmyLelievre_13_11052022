import React from "react";
import Account from "../components/Account";
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
          <Account
            accountTitle="Argent Bank Checking (x8349)"
            accountAmount="$2,082.79"
            accountDescription="Available Balance"
          />
          <Account
            accountTitle="Argent Bank Savings (x6712)"
            accountAmount="$10,928.42"
            accountDescription="Available Balance"
          />
          <Account
            accountTitle="Argent Bank Credit Card (x8349)"
            accountAmount="$184.30"
            accountDescription="Current Balance"
          />
        </div>
      </div>
    </div>
  );
};

export default User;
