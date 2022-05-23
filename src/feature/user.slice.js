import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    createdAt: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    updatedAt: "",
    __v: 0,
    password: "",
    username: "",
    newFirstName: "",
    newLastName: "",
  },
  reducers: {
    setUserData: (state, action) => {
      const userData = action.payload;
      state.createdAt = userData.createdAt;
      state.email = userData.email;
      state.id = userData.id;
      state.updatedAt = userData.updatedAt;
      state.firstName = userData.firstName;
      state.lastName = userData.lastName;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setNewFirstName: (state, action) => {
      state.newFirstName = action.payload;
    },
    setNewLastName: (state, action) => {
      state.newLastName = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  setUserData,
  setPassword,
  setUserName,
  setNewFirstName,
  setNewLastName,
} = userSlice.actions;
