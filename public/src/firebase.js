// Import the functions you need from the SDKs you need
import "firebase/storage";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj38ODTCdB82ZwLX_0g0pvLBEyH5ZCxQ4",
  authDomain: "blog-cfd77.firebaseapp.com",
  projectId: "blog-cfd77",
  storageBucket: "blog-cfd77.appspot.com",
  messagingSenderId: "710748128896",
  appId: "1:710748128896:web:79547a414cb49f3da6c865",
  measurementId: "G-EKLMY77JLF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app)

export {db}