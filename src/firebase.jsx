// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC78dpazScsAiyLVeaOnfdhE0cP8xk7tTc",
  authDomain: "dream-store-f5025.firebaseapp.com",
  databaseURL: "https://dream-store-f5025-default-rtdb.firebaseio.com",
  projectId: "dream-store-f5025",
  storageBucket: "dream-store-f5025.appspot.com",
  messagingSenderId: "233932852461",
  appId: "1:233932852461:web:1acf50f33bd304385350e4",
  measurementId: "G-JTB3J6SS6B",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
