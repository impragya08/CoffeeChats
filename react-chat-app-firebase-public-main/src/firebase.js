// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbqDrA2j3ojYNLNTAAq5vVThNeGHKNlzQ",
  authDomain: "coffeechats-b71e0.firebaseapp.com",
  projectId: "coffeechats-b71e0",
  storageBucket: "coffeechats-b71e0.appspot.com",
  messagingSenderId: "566392471878",
  appId: "1:566392471878:web:047437a9dc34cd3dabe547",
  measurementId: "G-9SWSFG6R22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)