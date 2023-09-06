import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';

//input related material imports
import { TextField, Typography, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import icons
import { useNavigate } from "react-router-dom";


const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('userId', user.uid);
        localStorage.setItem('userEmail', user.email);
        navigate("/userprofile");
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
        localStorage.setItem('userId', user.uid);
        localStorage.setItem('userEmail', user.email);
        navigate("/userprofile");
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
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"} // Show password if showPassword is true
          label="Password"
          variant="outlined"
          sx={{ margin: "4px", width: "100%" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            // Add an eye icon button to toggle password visibility
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }} />
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
