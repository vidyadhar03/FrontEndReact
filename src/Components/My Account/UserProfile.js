import React from "react";
import { useState } from "react";
import "./UserProfile.css";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";

const UserProfile = () => {

    const [activeTab, setActiveTab] = useState('accountDetails');

    const heading = () => {
        return (
            <div className="headingBox">
                <div style={{ marginTop: "60px",display:"flex",flexDirection:"row" }}>
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
