import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-33ab2.firebaseapp.com",
  projectId: "chat-33ab2",
  storageBucket: "chat-33ab2.appspot.com",
  messagingSenderId: "629739431097",
  appId: "1:629739431097:web:997ec42c2341030bbee768",
  measurementId: "G-E6X9KNS5H6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
