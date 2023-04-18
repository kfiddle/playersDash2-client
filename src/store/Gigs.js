import { createSlice } from "@reduxjs/toolkit";

const initialGigsState = {
  gigs: [],
};

const gigsSlice = createSlice({
  name: "Gigs",
  initialState: initialGigsState,
  reducers: {
    setGigs(state, action) {
      state.gigs = action.payload.gigs;
    },
  },
});

export const gigsActions = gigsSlice.actions;
export default gigsSlice.reducer;
