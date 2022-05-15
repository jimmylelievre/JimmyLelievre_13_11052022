import axios from "axios";
import React, { useEffect, useState } from "react";
import Account from "../components/Account";
import Header from "../components/Header";

const User = () => {
  const [editToggle, setEditToggle] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => console.log(res));
  });

  return (
    <div>
      <Header user="user" name="Tony" />
      <div className="background-content">
        <div className="user">
          {editToggle ? (
            <div className="edit-text">
              <h1>Welcome back</h1>
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Tony"
                />
                <input
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                  placeholder="Jarvis"
                />
              </div>
              <div>
                <button
                  onClick={() => setEditToggle(!editToggle)}
                  className="edit-button-modify"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditToggle(!editToggle)}
                  className="edit-button-modify"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex">
              <h1>
                Welcome back
                <br />
                Tony Jarvis!
              </h1>
              <button
                onClick={() => setEditToggle(!editToggle)}
                className="edit-button"
              >
                Edit Name
              </button>
            </div>
          )}

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
