import { Container, Typography } from "@mui/material";
import React from "react";
import { auth, db } from './Firebase';
import { signOut } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import "./UserProfile.css";

const UserProfile = () => {

    const [email, setemail] = useState("");
    const [name,setname] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const navigate = useNavigate();
    const linkStyles = {
        // textDecoration: 'none',
        color: 'inherit',
        // outline: 'none',
    };
    const divtextStyle = {
        fontWeight: 'bold', 
        fontSize: '16px',
        color: '#333333'
    };

    useEffect(() => {

        if (auth.currentUser) {
            //getting user data from DB
            const userRef = ref(db, 'Users/' + auth.currentUser.uid);
            setemail(auth.currentUser.email)

            const unsubscribe = onValue(userRef, (snapshot) => {
                const userData = snapshot.val();
                if (userData) {
                    setaddress(userData.profile.address)
                    setname(userData.profile.name)
                    setphone(userData.profile.phone)
                    console.log('User data from db:', userData);
                } else {
                    console.log('User not found.');
                }
            }, {
                onlyOnce: true
            });

            return () => {
                unsubscribe();
            }
        }

    }, []);

    const signOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful")
            navigate("/authentication");
        }).catch((error) => {
            console.log("unable to sign out due to: ", error)
        });
    }

    return (
        <div>
            <div className="user-profile">
                <Container sx={{ marginTop: '100px' }}>
                    <Typography
                        variant="h5"
                        component="h2"
                        align="left"
                        gutterBottom
                        sx={{ borderBottom: "1px solid #ccc" }}
                    >
                        Welcome {name ? name : "User"}
                    </Typography>
                    <div className="details-container">
                        <div className="details-section">
                            <div><span style={divtextStyle}>Email:</span> {email}</div>
                            <div><span style={divtextStyle}>Phone:</span> {phone ? phone : "Not updated yet"}</div>
                            <div><span style={divtextStyle}>Address:</span> {address}</div>
                        </div>
                        <div className="actions-section">
                            <div>
                                <Link to={'/orders'} style={linkStyles}>
                                    <div style={divtextStyle}>Your orders</div>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/cart'} style={linkStyles}>
                                    <div style={divtextStyle}>
                                        Your Cart
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/editprofile'} style={linkStyles}>
                                    <div style={divtextStyle}>
                                        Edit Profile
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px " }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Button variant="contained" sx={{ margin: "4px", width: "100%" }} onClick={signOutUser}>
                        {"Sign Out"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
