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
  },
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
      console.log(state.firstName, action);
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  setUserData,
  setPassword,
  setUserName,
  setFirstName,
  setLastName,
} = userSlice.actions;
