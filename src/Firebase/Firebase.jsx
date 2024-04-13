import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABZzFuGxF4zpKa4ilbktalSrWXz8vXzM0",
  authDomain: "dream-house-bd-6c1a2.firebaseapp.com",
  projectId: "dream-house-bd-6c1a2",
  storageBucket: "dream-house-bd-6c1a2.appspot.com",
  messagingSenderId: "884531710499",
  appId: "1:884531710499:web:020e3b8c5644c8b66f7f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;