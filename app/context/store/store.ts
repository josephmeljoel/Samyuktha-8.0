import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { authReducer } from "./authSlice";

export const store = configureStore({
  reducer: { auth: authReducer },

});


export const wrapper = createWrapper(makeStore);
