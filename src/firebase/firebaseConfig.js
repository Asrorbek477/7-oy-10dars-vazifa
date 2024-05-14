// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7Fwas7_zH9dRthnDwz0E7qVjs22L02Sw",
  authDomain: "comfy-store-cc024.firebaseapp.com",
  projectId: "comfy-store-cc024",
  storageBucket: "comfy-store-cc024.appspot.com",
  messagingSenderId: "959119139677",
  appId: "1:959119139677:web:32b911597a88d0c8ee3eb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Auth
export const auth = getAuth(app)
