// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS4lmJ7jZWUJKlstXvKi_ERRSXiUxdev8",
  authDomain: "trading-14006.firebaseapp.com",
  projectId: "trading-14006",
  storageBucket: "trading-14006.appspot.com",
  messagingSenderId: "755987781156",
  appId: "1:755987781156:web:035cbf3d5880c0a65d2ab1",
  measurementId: "G-VTHH9W1NCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)