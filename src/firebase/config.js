// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDm44xYKPBTJFw3h6l-I9EMvsAOHavNfFk",
    authDomain: "tienda-proyecto-coderhouse.firebaseapp.com",
    projectId: "tienda-proyecto-coderhouse",
    storageBucket: "tienda-proyecto-coderhouse.appspot.com",
    messagingSenderId: "276325645336",
    appId: "1:276325645336:web:f5ec915dc328e254d8d76d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)