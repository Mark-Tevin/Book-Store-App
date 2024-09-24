// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTcBFZnSk4eYhlYG6IAtiniu2i9nwbkpo",
  authDomain: "mern-book-inventory-app-8d211.firebaseapp.com",
  projectId: "mern-book-inventory-app-8d211",
  storageBucket: "mern-book-inventory-app-8d211.appspot.com",
  messagingSenderId: "92074288227",
  appId: "1:92074288227:web:36d30ad90d0e916071c456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;