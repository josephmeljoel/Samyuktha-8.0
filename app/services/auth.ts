// auth.ts
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setAuthState } from '../context/store/authSlice';



const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<void> => {
    try {
        const dispatch = useDispatch();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        if (user) {
            console.log(user)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log(credential)
            const accessToken = credential?.accessToken || ''; // Access the token here

            localStorage.setItem('Authorization', accessToken)

            // set global state
            dispatch(setAuthState({
                authState: true,
                accessToken: accessToken,
                uid: user.uid,
            }));
        }
    } catch (error) {
        console.error(error);
    }
};

export const logOut = async (): Promise<void> => {
    try {
        await signOut(auth);

        console.log('User signed out');
    } catch (error) {
        console.error(error);
    }
};
