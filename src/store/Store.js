import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Auth";
import gigsReducer from "./Gigs";

const store = configureStore({
  reducer: { auth: authReducer, gigs: gigsReducer },
});

export default store;
