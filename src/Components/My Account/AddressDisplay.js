import { Typography } from "@mui/material";
import "./AddressDisplay.css";
import React, { useEffect, useState } from "react";
import { auth, db } from '../Firebase';
import { ref, onValue } from "firebase/database";
import { useNavigate } from 'react-router-dom';

const AddressDisplay = () => {

    const [Name, setName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        if (auth.currentUser) {
            //getting user data from DB
            const userRef = ref(db, 'Users/' + auth.currentUser.uid);

            const unsubscribe = onValue(userRef, (snapshot) => {
                const userData = snapshot.val();
                if (userData) {
                    setName(userData.profile.name)

                    if (userData.profile.address) {
                        setAddress1(userData.profile.address.add_line1);
                        setAddress2(userData.profile.address.add_line2 || "");  // Default to empty string if not present
                        setCity(userData.profile.address.city);
                        setState(userData.profile.address.state);
                        setZip(userData.profile.address.pincode);
                    }

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

    const onEdit = () => {
        navigate("/billingdetails")
    }

    return (
        <div className="main-container" >
            <Typography variant="h6" component="h2" align="left" gutterBottom >
                Address display component
            </Typography>
            {address1 !== "" ? (
                <div>
                    <div style={{ marginTop: "20px" }}>
                        The following addresses will be used on the checkout page by default.
                    </div>
                    <div className="address-container">
                        <div className="address-heading">
                            BILLING ADDRESS
                        </div>
                        <button className="edit-button" onClick={onEdit}>EDIT</button>
                    </div>
                    <div className="address-content">
                        <div style={{ fontFamily: "italic" }}>{Name}</div>
                        <div style={{ fontFamily: "italic" }}>{address1 + " " + address2}</div>
                        <div style={{ fontFamily: "italic" }}>{city + " " + zip}</div>
                        <div style={{ fontFamily: "italic" }}>{state}</div>
                    </div>
                </div>
            ) : (
                <div>
                    <div style={{ marginTop: "20px" }}>
                        No available addresses, please add below.
                    </div>
                    <div className="address-container">
                        <div className="address-heading">
                            BILLING ADDRESS
                        </div>
                        <button className="edit-button" onClick={onEdit}>ADD</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddressDisplay;