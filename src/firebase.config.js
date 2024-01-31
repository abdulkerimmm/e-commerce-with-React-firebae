import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfBIJ7kXKDGKPYe8EFQWXuA9tNBHeyfgA",
  authDomain: "e-commerece-16edf.firebaseapp.com",
  projectId: "e-commerece-16edf",
  storageBucket: "e-commerece-16edf.appspot.com",
  messagingSenderId: "527257381797",
  appId: "1:527257381797:web:5712c34151164d969b964c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
