// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsKCv8bSpYTzaEjqyhiIBY_RMcrfx5iO4",
  authDomain: "simple-project-d7a73.firebaseapp.com",
  projectId: "simple-project-d7a73",
  storageBucket: "simple-project-d7a73.appspot.com",
  messagingSenderId: "18700942698",
  appId: "1:18700942698:web:7bd8592f84ea54c9b27913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}