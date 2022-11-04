// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvqAKOrY-aZF7f5hFefGITWkQqsPsWga4",
  authDomain: "shopcode-1a2c9.firebaseapp.com",
  projectId: "shopcode-1a2c9",
  storageBucket: "shopcode-1a2c9.appspot.com",
  messagingSenderId: "239267400953",
  appId: "1:239267400953:web:7d20dc06335aa735f16628",
  measurementId: "G-XSETW4E8JS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
// // đăng ký
// export function signup(email, password) {
//   createUserWithEmailAndPassword(auth, email, password);
// }
// xử ký show user
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const huydev = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return huydev;
  }, []);
  return currentUser;
}

// đăng xuất
// export function logout() {
//   signOut(auth);
// }
// đăng nhập

// export function signin(email, password) {
//   signInWithEmailAndPassword(auth, email, password);
// }

export { auth };
