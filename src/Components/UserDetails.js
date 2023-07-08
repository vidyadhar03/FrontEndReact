import { Container, Typography } from "@mui/material";
import React from "react";
import "./UserProfile.css";

const UserProfile = () => {

    const email = "vidyadhariitkgp@gmail.com"
    const phone = "7478022333"
    const address = "Viman Nagar,Pune-411014"

    return (
        <div className="user-profile">
            <Container>
                <Typography
                    variant="h6"
                    component="h2"
                    align="left"
                    gutterBottom
                    sx={{ borderBottom: "1px solid #ccc" }}
                >
                    Vidyadhar Gowd
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
