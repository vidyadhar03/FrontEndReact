import { auth } from '../Firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import DialogBox from '../DialogBox';

const Sidebar = ({ setActiveTab }) => {

    const navigate = useNavigate();
    //dialog
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');


    const signOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful")
            setDialogMessage('Log Out successfull!');
            setShowDialog(true);
            setTimeout(() => {
                navigate("/authentication");
              }, 500);
        }).catch((error) => {
            console.log("unable to sign out due to: ", error)
            setDialogMessage('Log Out failed,try again!');
            setShowDialog(true);
        });
    }


    return (
        <div className="sidebar">
            <button className="sidebarButton" onClick={() => setActiveTab('accountDetails')}>ACCOUNT DETAILS</button>
            <button className="sidebarButton" onClick={() => setActiveTab('orders')}>ORDERS</button>
            <button className="sidebarButton" onClick={() => setActiveTab('addresses')}>ADDRESS</button>
            <button className="sidebarButton" onClick={signOutUser}>LOG OUT</button>
            <DialogBox
                message={dialogMessage}
                show={showDialog}
                onClose={() => setShowDialog(false)}
            />
        </div>
    );
}

export default Sidebar;
