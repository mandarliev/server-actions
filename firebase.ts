// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAepgVNsZD7JlqjRbfgnqq4MW7pFR-YSU",
  authDomain: "server-actions-57cbe.firebaseapp.com",
  projectId: "server-actions-57cbe",
  storageBucket: "server-actions-57cbe.appspot.com",
  messagingSenderId: "124998919036",
  appId: "1:124998919036:web:c90e3d7460200a1cc8faf9",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
