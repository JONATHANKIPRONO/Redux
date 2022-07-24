import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../Feature/counter";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
