import firebase from "firebase/app";
import  "firebase/auth";
import  "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpDciRJFB01xWGtt1Yx_awzjWxe8yxC7U",
    authDomain: "modul11-7044a.firebaseapp.com",
    projectId: "modul11-7044a",
    storageBucket: "modul11-7044a.appspot.com",
    messagingSenderId: "776699491281",
    appId: "1:776699491281:web:634138f8da566972c6a6f0",
    measurementId: "G-TG8ZM4BMCL"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
