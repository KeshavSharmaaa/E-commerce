// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjAtu-acMU8uBGfx0GTMeeQC8BYcU5kA8",
  authDomain: "ecommerce-897f0.firebaseapp.com",
  projectId: "ecommerce-897f0",
  storageBucket: "ecommerce-897f0.appspot.com",
  messagingSenderId: "771918950126",
  appId: "1:771918950126:web:f7a085df06b2b141d04dff",
  measurementId: "G-YZH672F55D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const analytics = getAnalytics(app);

export default app;