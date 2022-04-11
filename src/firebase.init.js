// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn-6LvuceJdq31w_4Ke5xKVsTlz6tujLg",
  authDomain: "my-ema-john-simple-4ddba.firebaseapp.com",
  projectId: "my-ema-john-simple-4ddba",
  storageBucket: "my-ema-john-simple-4ddba.appspot.com",
  messagingSenderId: "992351180655",
  appId: "1:992351180655:web:eb45de2062ee548d08fa9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;
