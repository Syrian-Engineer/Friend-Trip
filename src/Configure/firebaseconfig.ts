// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2NqEal4hk0wvRy2Y3E6Jh0hB1P5hT9_w",
  authDomain: "friends-trip-bdabd.firebaseapp.com",
  projectId: "friends-trip-bdabd",
  storageBucket: "friends-trip-bdabd.firebasestorage.app",
  messagingSenderId: "955755557569",
  appId: "1:955755557569:web:31722a6da55192cb8f5a40",
  measurementId: "G-N3J9C589HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)