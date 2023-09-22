import { Container, Typography } from "@mui/material";
import React from "react";
import { auth, db } from './Firebase';
import { ref, onValue } from "firebase/database";
import { useEffect,useState} from "react";
import "./UserProfile.css";

const UserProfile = () => {

    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");

    useEffect(() => {

        if (auth.currentUser) {
            //getting user data from DB
            const userRef = ref(db, 'Users/' + auth.currentUser.uid);
            setemail(auth.currentUser.email)

            const unsubscribe = onValue(userRef, (snapshot) => {
                const userData = snapshot.val();
                if (userData) {
                    setaddress(userData.profile.address)
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

    return (
        <div className="user-profile">
            <Container sx={{ marginTop: '100px' }}>
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
