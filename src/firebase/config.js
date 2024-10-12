// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnJ5d8k4c_WEdgMbkIpsHt1sbMfUVZlHs",
  authDomain: "proyecto-reactjs-cc395.firebaseapp.com",
  projectId: "proyecto-reactjs-cc395",
  storageBucket: "proyecto-reactjs-cc395.appspot.com",
  messagingSenderId: "425459525407",
  appId: "1:425459525407:web:e939a747a506c5dd1fb22a",
  measurementId: "G-LT3WXJPXBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
