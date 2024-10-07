// auth.ts
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setAuthState } from "../context/store/authSlice";
import Store from "../context/store/store";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<void> => {
  try {
    const dispatch = Store.dispatch;
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    if (user) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      const accessToken = credential?.accessToken || "";

      // set global state
      dispatch(
        setAuthState({
          email: user.email || "",
          authState: true,
          accessToken: accessToken,
          uid: user.uid,
        })
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);

    console.log("User signed out");
  } catch (error) {
    console.error(error);
  }
};
