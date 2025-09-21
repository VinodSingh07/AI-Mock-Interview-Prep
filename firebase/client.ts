// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyC_1ap8uIzQC7kyXIioaiXQYtP41hKc09Y",
  authDomain: "prepwise-eace3.firebaseapp.com",
  projectId: "prepwise-eace3",
  storageBucket: "prepwise-eace3.firebasestorage.app",
  messagingSenderId: "695439628907",
  appId: "1:695439628907:web:b1136e7f0ae68e197d6f2e",
  measurementId: "G-9Q674V3112"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
