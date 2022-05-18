import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthentified: false,
    token: "",
  },
  reducers: {
    userLogin: (state, action) => {
      state.isAuthentified = true;
      state.token = action;
    },
    userLogout: (state) => {
      state.isAuthentified = false;
      state.token = "";
    },
  },
});

export default authSlice.reducer;
export const { userLogin, userLogout } = authSlice.actions;
