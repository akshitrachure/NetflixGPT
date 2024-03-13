import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWT3grknbfcZ-Zk9r7KBENCGz-kYgcnG4",
  authDomain: "netflixgpt-new.firebaseapp.com",
  projectId: "netflixgpt-new",
  storageBucket: "netflixgpt-new.appspot.com",
  messagingSenderId: "48658557897",
  appId: "1:48658557897:web:8474d0d91dd1c270639618",
  measurementId: "G-0C5LYVYMDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
