import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAF9P8zIsCzRiFSd0yDJwieyMBnZJRxlmI",
  authDomain: "cv-nathan.firebaseapp.com",
  projectId: "cv-nathan",
  storageBucket: "cv-nathan.appspot.com",
  messagingSenderId: "950965509625",
  appId: "1:950965509625:web:aee7cf91c36bb6f321f128",
  measurementId: "${config.measurementId}"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };