import { Container, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {

    // const location = useLocation();
    // const userInfo = location.state?.userInfo;

    var userInfo = localStorage.getItem('userId');
    console.log("printing from here",userInfo)

    const email = localStorage.getItem('userEmail');
    const phone = "7478022333"
    const address = "Viman Nagar,Pune-411014"

    return (
        <div className="user-profile">
            <Container sx={{marginTop:'100px'}}>
                <Typography
                    variant="h6"
                    component="h2"
                    align="left"
                    gutterBottom
                    sx={{ borderBottom: "1px solid #ccc" }}
                >
                    Display Name
                </Typography>
                <div className="details-container">
                    <div className="details-section">
                            <div>Email: {email}</div>
                            <div>Phone: {phone}</div>
                            <div>Address: {address}</div>
                    </div>
                    <div className="actions-section">
                            <div>Your Orders</div>
                            <div>Cart</div>
                            <div>Edit Profile</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UserProfile;
