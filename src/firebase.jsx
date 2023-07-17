import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu37iC4Fq9hCCyd5nzTrNrzR_mL-yDCYM",
  authDomain: "instantchat-94369.firebaseapp.com",
  projectId: "instantchat-94369",
  storageBucket: "instantchat-94369.appspot.com",
  messagingSenderId: "117494327616",
  appId: "1:117494327616:web:527ace5488561ca12772a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);