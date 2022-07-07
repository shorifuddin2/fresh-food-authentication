import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDoB1IIkxQFPq6CGTnf8jZCTaznOoRatws",
    authDomain: "fresh-food-authenticatio-4c714.firebaseapp.com",
    projectId: "fresh-food-authenticatio-4c714",
    storageBucket: "fresh-food-authenticatio-4c714.appspot.com",
    messagingSenderId: "681880696718",
    appId: "1:681880696718:web:0c3d325d3e41c2cb5756df",
    measurementId: "G-95Z6J3E3FX"
  };
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;