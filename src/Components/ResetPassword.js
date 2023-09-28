import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from './Firebase';
import { TextField, Button, Typography, Container } from "@mui/material";

const ResetPassword = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const restPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                console.log("email sent successfully")
                navigate("/authentication");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage)
                // ..
            });
    };

    return (
        <div style={{ display: "flex", padding: "30px", flexDirection: "column", alignItems: "center" }}>
            <Typography style={{ marginTop: "100px", fontSize: "18px" }}>Reset Password</Typography>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "20px", alignItems: "center" }}>
                <div>
                    Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
                </div>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{ margin: "4px", width: "100%", marginTop: "20px" }}
                        value={email} // Bind the value to email state
                        onChange={(e) => setEmail(e.target.value)} // Update email state on change
                    />
                    <Button variant="contained" sx={{ margin: "4px", width: "100%" }} onClick={restPassword}>
                        Reset Password
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;