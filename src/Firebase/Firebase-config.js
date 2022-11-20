import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";

//
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeC0Jjl--mOAFX_azxmmRLGwz1wu-DiuM",
  authDomain: "client-demo-firebase.firebaseapp.com",
  projectId: "client-demo-firebase",
  storageBucket: "client-demo-firebase.appspot.com",
  messagingSenderId: "558699151314",
  appId: "1:558699151314:web:3a98e07effac9d3b3ad20b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Create database calling getFirestore with the initialized app
// export this database
export const db = getFirestore(app);
//
//
// Setting up Auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
// Setting the persistence nature of user sessions...
setPersistence(auth, browserSessionPersistence).then(() => {
  // Existing and future Auth states are now persisted in the current
  // session only. Closing the window would clear any existing state even
  // if a user forgets to sign out.
  // ...
  // New sign-in will be persisted with session persistence.
  // You can add a method here to promot a user
  // info found at https://firebase.google.com/docs/auth/web/auth-state-persistence
});
//
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//
export const signOutUser = async () => {
  await signOut(auth);
};
//
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
//
export const logGoogleUser = async () => {
  await signInWithGooglePopup();
};
//
export const handleLogOut = async () => {
  // Sign out the user from firestore
  await signOutUser().then(console.log("User logged out"));
};
