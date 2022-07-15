// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb89bmrMOcsQIGo6KCxPe0RGgS5QkFdO0",
  authDomain: "pokemonapilist.firebaseapp.com",
  projectId: "pokemonapilist",
  storageBucket: "pokemonapilist.appspot.com",
  messagingSenderId: "157372931959",
  appId: "1:157372931959:web:73cf0a02983aa537f00b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()