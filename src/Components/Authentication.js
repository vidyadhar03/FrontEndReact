import { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//firebase configuration details
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

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input

  const toggleMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const signUpUser = () => {
    console.log("signing up user");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div style={{ display: "flex", padding: "30px", flexDirection: "column", alignItems: "center" }}>
      <Typography style={{ marginTop: "100px", fontSize: "18px" }}>{isSignUp ? "Sign Up" : "Sign In"}</Typography>

      <div style={{ display: "flex", flexDirection: "column", marginTop: "20px", alignItems: "center" }}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ margin: "4px", width: "100%" }}
          value={email} // Bind the value to email state
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ margin: "4px", width: "100%" }}
          value={password} // Bind the value to password state
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
        />
        <Button variant="contained" sx={{ margin: "4px", width: "100%" }} onClick={isSignUp ? signUpUser : signInUser}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <div style={{ fontSize: "12px", marginTop: "4px" }}>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={toggleMode}>
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );

};

export default Authentication;
