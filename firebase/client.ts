// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzlWi90-HYQHi0H-9zVtNdO8hMqoN6lxM",
  authDomain: "prepwise-d84cf.firebaseapp.com",
  projectId: "prepwise-d84cf",
  storageBucket: "prepwise-d84cf.firebasestorage.app",
  messagingSenderId: "313323781594",
  appId: "1:313323781594:web:cf4ea5920ac38b0980d4e3",
  measurementId: "G-ZYJ56CMT7R"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);