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
  },
  reducers: {
    setUserData: (state, action) => {
      const userData = action.payload;
      state.createdAt = userData.createdAt;
      state.email = userData.email;
      state.firstName = userData.firstName;
      state.id = userData.id;
      state.lastName = userData.lastName;
      state.updatedAt = userData.updatedAt;
    },
  },
});

export default userSlice.reducer;
export const { setUserData } = userSlice.actions;
