// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAPKHgROZVadGceaHMCslCYoOjeUC5nfB4",
  authDomain: "trippytree-a4793.firebaseapp.com",
  projectId: "trippytree-a4793",
  storageBucket: "trippytree-a4793.appspot.com",
  messagingSenderId: "516017858679",
  appId: "1:516017858679:web:0ce4791ce994ebf2f3be72",
  measurementId: "G-Z2NBHZVF1M",
  databaseURL: 'https://trippytree-a4793-default-rtdb.asia-southeast1.firebasedatabase.app',
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);
  
  export { auth, db };
