"use client";

import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  email: string;
  authState: boolean;
  accessToken: string;
  uid: string;
}

const initialState: IAuthState = {
  email: "",
  authState: false,
  accessToken: "",
  uid: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<IAuthState>) => {
      state.email = action.payload.email;
      state.authState = action.payload.authState;
      state.accessToken = action.payload.accessToken;
      state.uid = action.payload.uid;

      //   console.log("Payload", action.payload);

      localStorage.setItem("Authorization", action.payload.accessToken);
      localStorage.setItem("uid", action.payload.uid);
    },

    restoreSession(state, action: PayloadAction<IAuthState>) {
      state.email = action.payload.email;
      state.authState = action.payload.authState;
      state.accessToken = action.payload.accessToken;
      state.uid = action.payload.uid;
    },
  },
});

export const { setAuthState, restoreSession } = authSlice.actions;
export const authReducer = authSlice.reducer;
