// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9dEwE94DqdjYVR_wrWTm3b4GUwPSFaUY",
    authDomain: "samyuktha-8.firebaseapp.com",
    projectId: "samyuktha-8",
    storageBucket: "samyuktha-8.appspot.com",
    messagingSenderId: "538794366361",
    appId: "1:538794366361:web:f7ab27a84beed0f12cef08",
    measurementId: "G-MM983G8KN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { auth }