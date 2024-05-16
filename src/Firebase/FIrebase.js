// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey   ,
  // authDomain:import.meta.env.VITE_authDomain   ,
  // projectId:import.meta.env.VITE_projectId   ,
  // storageBucket:import.meta.env.VITE_storageBucket ,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId  ,
  // appId:import.meta.env.VITE_appId,
  // measurementId:import.meta.env.VITE_measurementId 
  apiKey: "AIzaSyCqCGWNGv75vlRnETkagF3e-dmy6XmeGE0",
  authDomain: "bistro-boss-52085.firebaseapp.com",
  projectId: "bistro-boss-52085",
  storageBucket: "bistro-boss-52085.appspot.com",
  messagingSenderId: "719954030807",
  appId: "1:719954030807:web:15d3d4eed8c2a3e3144092",
  measurementId: "G-MXG4Q8X2B7" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);