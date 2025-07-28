// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvjUXLGC-biL_EZfYNS-0QdMrIg3Y0oOg",
  authDomain: "courselink-dffa0.firebaseapp.com",
  projectId: "courselink-dffa0",
  storageBucket: "courselink-dffa0.firebasestorage.app",
  messagingSenderId: "1057531887326",
  appId: "1:1057531887326:web:76ef7e6c60dadf0a1e0c4f",
  measurementId: "G-BWRH9RJZC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;