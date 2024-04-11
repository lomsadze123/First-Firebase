import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9LW6FXvz4awoApfr06qMCDNeamsv21iY",
  authDomain: "test-61da4.firebaseapp.com",
  projectId: "test-61da4",
  storageBucket: "test-61da4.appspot.com",
  messagingSenderId: "240269036470",
  appId: "1:240269036470:web:ec3debcf749f720b3fcf17",
  measurementId: "G-VXYZ7JYQ68",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { auth, firestore, googleProvider };
