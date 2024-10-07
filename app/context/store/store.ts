import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { authReducer } from "./authSlice";

export const store = configureStore({
  reducer: { auth: authReducer },

});