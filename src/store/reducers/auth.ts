import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLogged: false,
  },
  reducers: {
  },
});

const { } = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer};
