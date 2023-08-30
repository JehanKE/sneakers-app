import { configureStore } from "@reduxjs/toolkit";
import sneakerReducer from "../redux/reducers/sneakerSlice";

export const store = configureStore({
  reducer: {
    sneaker: sneakerReducer,
  },
});
