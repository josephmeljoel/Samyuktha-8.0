"use client";
import { configureStore } from "@reduxjs/toolkit";

import { authReducer, restoreSession } from "./authSlice";
import { useEffect } from "react";

export const Store = configureStore({
  reducer: { auth: authReducer },
});

// This component will be responsible for restoring session
export const RestoreSession = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("Authorization");

      if (accessToken) {
        Store.dispatch(
          restoreSession({
            email: "",
            authState: true,
            accessToken: accessToken,
            uid: localStorage.getItem("uid") || "",
          })
        );
      }
    }
  }, []);

  return null; // No UI is needed, it's just for session restoration
};

export default Store;
