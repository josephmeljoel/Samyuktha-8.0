"use client";
import { configureStore } from "@reduxjs/toolkit";

import { authReducer, restoreSession } from "./authSlice";

export const Store = configureStore({
  reducer: { auth: authReducer },
});

const accessToken = localStorage.getItem("Authorization");
console.log("eferg", accessToken);

if (accessToken) {
  Store.dispatch(
    restoreSession({
      email: '',
      authState: true,
      accessToken: accessToken,
      uid: localStorage.getItem("uid") || "",
    })
  );
}

export default Store;
