// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeyZFbn3v2eYA4x7QqbtvZAMlYt9CqQNo",
  authDomain: "my-pantry-10f27.firebaseapp.com",
  projectId: "my-pantry-10f27",
  storageBucket: "my-pantry-10f27.appspot.com",
  messagingSenderId: "670274182017",
  appId: "1:670274182017:web:6e02fcdd55fb5478f62680",
  measurementId: "G-CG9F60NZT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}