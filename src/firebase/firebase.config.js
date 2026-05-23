// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaW2CjIbccfUh-4XC9zh_Cddb-9TIOo0M",
  authDomain: "fir-auth-app-c7ab7.firebaseapp.com",
  projectId: "fir-auth-app-c7ab7",
  storageBucket: "fir-auth-app-c7ab7.firebasestorage.app",
  messagingSenderId: "1042152678299",
  appId: "1:1042152678299:web:c9a9d8d001e14e709a773e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);

