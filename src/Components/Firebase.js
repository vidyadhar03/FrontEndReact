// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAYBksSTtveR7M8d0JBF6pVcl-GgNMP0oE",
    authDomain: "serioustesting-91ba8.firebaseapp.com",
    databaseURL: "https://serioustesting-91ba8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "serioustesting-91ba8",
    storageBucket: "serioustesting-91ba8.appspot.com",
    messagingSenderId: "838645691893",
    appId: "1:838645691893:web:b317d5e44a289500345cbc",
    measurementId: "G-NHZKXHRWMX"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
  
  // Export any Firebase services that you want to use in your app
  export { auth, database }; // Example: Firebase Authentication service
