import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './Firebase';
import { ref, set } from "firebase/database";
import Loader from "./Loader";
import DialogBox from "./DialogBox";

//input related material imports
import { TextField, Typography, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import icons
import { useNavigate } from "react-router-dom";

const userObject = {
  userId: "",
  cart_objects: [],
  orders: [],
  profile: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
};

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //loader
  const [isLoading, setIsLoading] = useState(false);
  const enableLoader = () => {
    setIsLoading(true);
  };
  const disableLoader = () => {
    setIsLoading(false);
  };

  //dialog
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');


  const toggleMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const signUpUser = () => {
    enableLoader()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const RandomUserObject = {
          userId: userCredential.user.uid,
          cart_objects: [],
          orders: [],
          profile: {
            name: "",
            // address: "Thuraipakkam, Chennai-41104, Tamil Nadu,india",
            email: userCredential.user.email,
            phone: "",
          },
        };

        const newUserObject = { ...userObject, ...RandomUserObject };

        // console.log("new user copied", newUserObject);

        set(ref(db, 'Users/' + userCredential.user.uid), newUserObject);

        setDialogMessage('Sign up successfull!');
        setShowDialog(true);
        disableLoader()
        setTimeout(() => {
          navigate("/userprofile");
        }, 500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        setDialogMessage("Sign Up failed,try again!");
        setShowDialog(true);
        disableLoader()
      });
  };

  const signInUser = () => {
    enableLoader()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDialogMessage('Log In successfull!');
        setShowDialog(true);
        disableLoader()
        setTimeout(() => {
          navigate("/userprofile");
        }, 500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        setDialogMessage("Log In failed,try again!");
        setShowDialog(true);
        disableLoader()
      });
  };

  const restPassword = () => {
    navigate("/ResetPassword")
  };

  return (
    <div style={{ display: "flex", padding: "30px", flexDirection: "column", alignItems: "center" }}>
      
      {isLoading && <Loader />}

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
        <div style={{ fontSize: "12px", margin: "4px", cursor: "pointer", 
        textAlign: "end", width: "100%", flexDirection: "column",textDecoration:"underline" }} onClick={restPassword}>
          Forgot Password?
        </div>
        <Button variant="contained" sx={{ margin: "4px", width: "100%" }} onClick={isSignUp ? signUpUser : signInUser}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <div style={{ fontSize: "14px", marginTop: "4px" }}>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={toggleMode}>
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </div>
      </div>

      <DialogBox 
        message={dialogMessage} 
        show={showDialog} 
        onClose={() => setShowDialog(false)} 
      />

    </div>
  );

};

export default Authentication;
