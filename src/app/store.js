import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user.slice";
import authReducer from "../feature/auth.slice";

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});
