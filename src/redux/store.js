import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter/counterSlice";
import colorSlice from "./color/colorSlice";

export default configureStore({
  reducer: {
    count: countReducer,
    color:colorSlice
  },
});
