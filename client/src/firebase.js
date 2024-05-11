// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cad8a.firebaseapp.com",
  projectId: "mern-blog-cad8a",
  storageBucket: "mern-blog-cad8a.appspot.com",
  messagingSenderId: "1079880091512",
  appId: "1:1079880091512:web:7d9f636a36ba6b441aea8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);