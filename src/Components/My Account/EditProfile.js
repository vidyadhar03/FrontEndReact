// import { React, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ref, onValue, update } from "firebase/database";
// import { auth, db } from '../Firebase';
// import { TextField, Button, Typography } from "@mui/material";

// const EditProfile = () => {

//     const [name, setName] = useState("");
//     const [address, setAddress] = useState("");
//     const [Phone, setPhone] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch the user's profile data when the component mounts
//         if (auth.currentUser) {
//             //getting user data from DB
//             const userRef = ref(db, 'Users/' + auth.currentUser.uid);

//             const unsubscribe = onValue(userRef, (snapshot) => {
//                 const userData = snapshot.val();
//                 if (userData) {
//                     setAddress(userData.profile.address)
//                     setName(userData.profile.name)
//                     setPhone(userData.profile.phone)
//                     console.log('User data from db:', userData);
//                 } else {
//                     console.log('User not found.');
//                 }
//             }, {
//                 onlyOnce: true
//             });

//             return () => {
//                 unsubscribe();
//             }
//         }

//     }, []);

//     const updateProfile = () => {
//         if (auth.currentUser) {
//             const userId = auth.currentUser.uid;
//             const userRef = ref(db, `Users/${userId}`);
//             const updates = {};
//             if (name !== "") updates["profile/name"] = name;
//             if (address !== "") updates["profile/address"] = address;
//             if (Phone !== "") updates["profile/phone"] = Phone;

//             // Perform the update
//             update(userRef, updates)
//                 .then(() => {
//                     console.log("User profile updated successfully.");
//                     navigate("/userprofile"); // Redirect to the dashboard or another appropriate page
//                 })
//                 .catch((error) => {
//                     console.error("Error updating user profile:", error);
//                 });
//         }
//     }

//     return (
//         <div style={{ display: "flex", padding: "30px", flexDirection: "column", alignItems: "center" }}>
//             <Typography style={{ marginTop: "100px", fontSize: "18px" }}>Update Profile</Typography>
//             <div style={{ display: "flex", flexDirection: "column", marginTop: "20px", alignItems: "center" }}>
//                 <div>
//                     Update the below required information
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                     <TextField
//                         id="outlined-basic"
//                         label="Name"
//                         variant="outlined"
//                         sx={{ margin: "4px", width: "100%", marginTop: "20px" }}
//                         value={name} // Bind the value to email state
//                         onChange={(e) => setName(e.target.value)} // Update email state on change
//                     />
//                     {/* <Button variant="contained" sx={{ margin: "4px", width: "100%" }} onClick={updateName}>
//                         Update Name
//                     </Button> */}
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                     <TextField
//                         id="outlined-basic"
//                         label="Address"
//                         variant="outlined"
//                         sx={{ margin: "4px", width: "100%", marginTop: "10px" }}
//                         value={address} // Bind the value to email state
//                         onChange={(e) => setAddress(e.target.value)} // Update email state on change
//                     />
//                     {/* <Button variant="contained" sx={{ margin: "4px", width: "100%" }} onClick={updateAddress}>
//                         Update address
//                     </Button> */}
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                     <TextField
//                         id="outlined-basic"
//                         label="Phone"
//                         variant="outlined"
//                         sx={{ margin: "4px", width: "100%", marginTop: "10px" }}
//                         value={Phone} // Bind the value to email state
//                         onChange={(e) => setPhone(e.target.value)} // Update email state on change
//                     />
//                     {/* <Button variant="contained" sx={{ margin: "4px", width: "100%" }} onClick={updatePhone}>
//                         Update Phone
//                     </Button> */}
//                 </div>
//                 <Button variant="contained" sx={{ margin: "4px", width: "100%" }} onClick={updateProfile}>
//                     Update Profile
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default EditProfile;

