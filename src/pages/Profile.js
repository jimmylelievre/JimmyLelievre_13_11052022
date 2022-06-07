import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../components/Account";
import Header from "../components/Header";
import { setFirstName, setLastName, setUserData } from "../feature/user.slice";
import { postToken, putEditProfil } from "../utils/apiRequest";

/**
 * Show the profile page
 * @returns
 */

const Profile = () => {
  const [editToggle, setEditToggle] = useState(false);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const userData = useSelector((state) => state.user);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  useEffect(() => {
    if (token) {
      postToken(token)
        .then((res) => {
          dispatch(setUserData(res.data.body));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleSubmitt = () => {
    putEditProfil(token, firstName, lastName);
  };

  return (
    <div>
      <Header user="user" name={firstName} />
      <div className="user-background-content">
        <div className="user">
          {editToggle ? (
            <div className="edit-text">
              <h1>Welcome back</h1>
              <div>
                <input
                  name="firstName"
                  onChange={(e) => {
                    dispatch(setFirstName(e.target.value));
                  }}
                  type="text"
                  value={firstName}
                />
                <input
                  name="lastName"
                  onChange={(e) => dispatch(setLastName(e.target.value))}
                  type="text"
                  value={lastName}
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
                {userData.firstName} {userData.lastName} !
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

export default Profile;
