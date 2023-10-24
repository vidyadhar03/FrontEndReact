import React from "react";
import { useState } from "react";
import "./UserProfile.css";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import { IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const UserProfile = () => {

    const [activeTab, setActiveTab] = useState('accountDetails');

    const heading = () => {
        return (
            <div className="headingBox">
                <div style={{ marginTop: "60px",display:"flex",flexDirection:"row" }}>
                    <IconButton color="white">
                        <AccountCircle />
                    </IconButton>
                    <h2>My Account</h2>
                </div>
            </div>
        );
    }

    return (
        <div>
            {heading()}
            <div className="mainContainer">
                <Sidebar setActiveTab={setActiveTab} />
                <ContentArea activeTab={activeTab} />
            </div>
        </div>
    );
};

export default UserProfile;
