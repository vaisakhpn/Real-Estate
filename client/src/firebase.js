// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-503eb.firebaseapp.com",
  projectId: "mern-estate-503eb",
  storageBucket: "mern-estate-503eb.appspot.com",
  messagingSenderId: "697617504958",
  appId: "1:697617504958:web:b6cc9c6e164c9098b0dcef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);