import { createSlice } from "@reduxjs/toolkit";

const initialLoggedState = {
  loggedIn: false,
  loggedInPlayer: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialLoggedState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.loggedInPlayer = action.payload.player;
    },
    logout(state) {
      state.loggedIn = false;
      state.loggedInPlayer = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
