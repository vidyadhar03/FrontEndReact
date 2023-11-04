import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { auth, db } from './Firebase';
import { ref, onValue, update } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import DialogBox from "./DialogBox";
import "./BillingAddress.css";

const BillingAddress = () => {
    const [Name, setName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    //dialog
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    useEffect(() => {

        // if (auth.currentUser) {
        //     //getting user data from DB
        //     const userRef = ref(db, 'Users/' + auth.currentUser.uid);
        //     setEmail(auth.currentUser.email)

        //     const unsubscribe = onValue(userRef, (snapshot) => {
        //         const userData = snapshot.val();
        //         if (userData) {
        //             setName(userData.profile.name)
        //             setPhone(userData.profile.phone)

        //             if (userData.profile.address) {
        //                 setAddress1(userData.profile.address.add_line1);
        //                 setAddress2(userData.profile.address.add_line2 || "");  // Default to empty string if not present
        //                 setCity(userData.profile.address.city);
        //                 setState(userData.profile.address.state);
        //                 setZip(userData.profile.address.pincode);
        //             }

        //             console.log('User data from db:', userData);
        //         } else {
        //             console.log('User not found.');
        //         }
        //     }, {
        //         onlyOnce: true
        //     });

        //     return () => {
        //         unsubscribe();
        //     }
        // }

        // This will hold the unsubscribe function for Firebase's onAuthStateChanged
        let authUnsubscribe;

        // This will hold the unsubscribe function for Firebase's onValue
        let dbUnsubscribe;

        authUnsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setEmail(user.email)
                // User is authenticated, fetch cart objects from DB
                const userRef = ref(db, 'Users/' + user.uid);
                dbUnsubscribe = onValue(userRef, (snapshot) => {
                    const userData = snapshot.val();
                    if (userData) {
                        setName(userData.profile.name)
                        setPhone(userData.profile.phone)

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
            }
        });

        return () => {
            // Cleanup listeners when the component is unmounted
            if (authUnsubscribe) authUnsubscribe();
            if (dbUnsubscribe) dbUnsubscribe();
        };

    }, []);

    const handleSaveChanges = () => {
        if (auth.currentUser && Name !== "" && phone !== "" && address1 !== "" && city !== "" && state !== "" && zip !== "") {
            const userId = auth.currentUser.uid;
            const userRef = ref(db, `Users/${userId}`);

            // Create the address object
            const user_address = {
                add_line1: address1,
                add_line2: address2 ? address2 : "", // If address2 is not provided, save it as an empty string
                city: city,
                state: state,
                pincode: zip
            };

            const updates = {};

            if (Name !== "") updates["profile/name"] = Name;
            if (phone !== "") updates["profile/phone"] = phone;
            if (email !== "") updates["profile/email"] = email;

            // Update the address in the user's profile
            updates["profile/address"] = user_address;

            // Perform the update
            update(userRef, updates)
                .then(() => {
                    console.log("User profile updated successfully.");
                    // Redirect to the dashboard or another appropriate page
                    // You might want to navigate to "/userprofile" to see the updated details
                    setDialogMessage("Adress updated successfully!");
                    setShowDialog(true);
                    setTimeout(() => {
                        navigate("/userprofile");
                    }, 1000);
                })
                .catch((error) => {
                    console.error("Error updating user profile:", error);
                    setDialogMessage("Adress update failed,try again!");
                    setShowDialog(true);
                });
        } else {
            window.alert("Please fill all the mandatory fields.");  // Show default browser alert
            return;
        }
    };


    return (
        <div className="billing-address-container">
            <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ marginTop: "100px" }}>
                Billing Address
            </Typography>

            <div className="input-group">
                <label htmlFor="Name">Full name*</label>
                <input type="text" id="Name" value={Name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="input-group">
                <label htmlFor="address1">Address Line 1*</label>
                <input type="text" id="address1" value={address1} onChange={(e) => setAddress1(e.target.value)} />
            </div>

            <div className="input-group">
                <label htmlFor="address2">Address Line 2</label>
                <input type="text" id="address2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
            </div>

            <div className="input-group">
                <label htmlFor="city">City/Town*</label>
                <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>

            <div className="input-group">
                <label htmlFor="state">State*</label>
                <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />
            </div>

            <div className="input-group">
                <label htmlFor="zip">PIN Code*</label>
                <input type="text" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} />
            </div>

            <div className="input-group">
                <label htmlFor="phone">Phone*</label>
                <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="input-group">
                <label htmlFor="email">Email*</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} readOnly />
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
};

export default BillingAddress;
