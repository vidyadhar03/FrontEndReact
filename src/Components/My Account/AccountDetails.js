import React from "react";
import { auth, db } from '../Firebase';
import { ref, onValue, update } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Typography } from "@mui/material";
import DialogBox from "../DialogBox";
import "./AccountDetails.css"


const AccountDetails = () => {
    // Use your existing states and logic for fetching user details here...


    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const navigate = useNavigate();

    //dialog
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');


    const handleSaveChanges = () => {
        if (auth.currentUser && name !== "" && phone !== "") {
            const userId = auth.currentUser.uid;
            const userRef = ref(db, `Users/${userId}`);
            const updates = {};
            if (name !== "") updates["profile/name"] = name;
            if (phone !== "") updates["profile/phone"] = phone;
            if (email !== "") updates["profile/email"] = email;

            // Perform the update
            update(userRef, updates)
                .then(() => {
                    console.log("User profile updated successfully.");
                    setDialogMessage("Changes saved!");
                    setShowDialog(true);
                    navigate("/userprofile"); // Redirect to the dashboard or another appropriate page
                })
                .catch((error) => {
                    setDialogMessage("Error saving changes,try again!");
                    setShowDialog(true);
                    console.error("Error updating user profile:", error);
                });
        } else {
            window.alert("Please fill all the mandatory fields.");  // Show default browser alert
            return;
        }
    };

    const handleResetPassword = () => {
        navigate("/ResetPassword")
    };

    useEffect(() => {

        // This will hold the unsubscribe function for Firebase's onAuthStateChanged
        let authUnsubscribe;

        // This will hold the unsubscribe function for Firebase's onValue
        let dbUnsubscribe;

        authUnsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setemail(user.email)
                // User is authenticated, fetch cart objects from DB
                const userRef = ref(db, 'Users/' + user.uid);
                dbUnsubscribe = onValue(userRef, (snapshot) => {
                    const userData = snapshot.val();
                    if (userData) {
                        setname(userData.profile.name)
                        setphone(userData.profile.phone)
                        console.log('User data from db:', userData);
                    } else {
                        console.log('User not found.');
                    }
                }, {
                    onlyOnce: true
                });
            }
        });

        return () => {
            // Cleanup listeners when the component is unmounted
            if (authUnsubscribe) authUnsubscribe();
            if (dbUnsubscribe) dbUnsubscribe();
        };

    }, []);

    return (
        <div className="account-details-container">

            <Typography variant="h6" component="h2" align="left" gutterBottom >
                Your Account details
            </Typography>

            <div className="input-group">
                <label htmlFor="fullName">Full name*</label>
                <input
                    type="text"
                    id="fullName"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
            </div>

            <div className="input-group">
                <label htmlFor="email">Email address*</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    readOnly
                />
            </div>

            <div className="input-group">
                <label htmlFor="phone">Phone*</label>
                <input
                    type="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                />
            </div>

            <div className="reset-button" onClick={handleResetPassword}>
                Reset Password
            </div>
            <button className="save-button" onClick={handleSaveChanges}>
                Save Changes
            </button>

            <DialogBox
                message={dialogMessage}
                show={showDialog}
                onClose={() => setShowDialog(false)}
            />

        </div>
    );

}


export default AccountDetails;
