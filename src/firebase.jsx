// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUziYrwaroZMbyihtoxIp7NCT8GxYE3NM",
  authDomain: "do-an-c7456.firebaseapp.com",
  projectId: "do-an-c7456",
  storageBucket: "do-an-c7456.appspot.com",
  messagingSenderId: "908126248029",
  appId: "1:908126248029:web:fad382ec4d63996bf541b4",
  measurementId: "G-V149KK684J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
