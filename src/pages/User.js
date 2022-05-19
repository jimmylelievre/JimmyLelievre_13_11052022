import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../components/Account";
import Header from "../components/Header";
import { setUserData } from "../feature/user.slice";

const User = () => {
  const [editToggle, setEditToggle] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token.payload);
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    setFirstName(userData.firstName);
    setLastname(userData.lastName);
  }, [userData.firstName, userData.lastName]);

  if (token) {
    axios({
      method: "POST",
      url: "http://localhost:3001/api/v1/user/profile",
      data: {},
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
    })
      .then((res) => {
        dispatch(setUserData(res.data.body));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSubmitt = () => {
    axios({
      method: "PUT",
      url: "http://localhost:3001/api/v1/user/profile",
      data: {
        firstName: newFirstName,
        lastName: newLastName,
      },
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
    });
  };

  return (
    <div>
      <Header user="user" name="Tony" />
      <div className="user-background-content">
        <div className="user">
          {editToggle ? (
            <div className="edit-text">
              <h1>Welcome back</h1>
              <div>
                <input
                  onChange={(e) => setNewFirstName(e.target.value)}
                  type="text"
                  placeholder={firstname}
                />
                <input
                  onChange={(e) => setNewLastName(e.target.value)}
                  type="text"
                  placeholder={lastname}
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    handleSubmitt();
                    setEditToggle(!editToggle);
                  }}
                  className="edit-button-modify"
                  type="button"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditToggle(!editToggle);
                  }}
                  className="edit-button-modify"
                  type="button"
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
                {firstname} {lastname} !
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
