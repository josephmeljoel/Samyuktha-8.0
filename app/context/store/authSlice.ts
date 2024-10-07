import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
    authState: boolean;
    accessToken: string;
    uid: string

}

const initialState: IAuthState = {
    authState: false,
    accessToken: '',
    uid: '',
};


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<IAuthState>) => {
            state.authState = action.payload.authState;
            state.accessToken = action.payload.accessToken;
            state.uid = action.payload.uid;
        },
    },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;