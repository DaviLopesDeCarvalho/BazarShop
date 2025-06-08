import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCidKalv5PKVAGkuFs1ZcRZ44n_sXVvy4M",
  authDomain: "bazarshop-d20f3.firebaseapp.com",
  projectId: "bazarshop-d20f3",
  storageBucket: "bazarshop-d20f3.firebasestorage.app",
  messagingSenderId: "934237680877",
  appId: "1:934237680877:web:a5fc137d4e044598c608e4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
