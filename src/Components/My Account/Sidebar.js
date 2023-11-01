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
            <button className="sidebarButton" onClick={() => setActiveTab('accountDetails')}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src="/accountcirclelogo.png" alt="Trippy Tree" style={{ width: "36px", height: '36px', objectFit: 'cover', marginLeft: "4em" }} />
                    <div style={{ marginLeft: "6px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                        ACCOUNT DETAILS
                    </div>
                </div>
            </button>
            <button className="sidebarButton" onClick={() => setActiveTab('orders')}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src="/orderscirclelogo.png" alt="Trippy Tree" style={{ width: "36px", height: '36px', objectFit: 'cover', marginLeft: "4em" }} />
                    <div style={{ marginLeft: "6px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                        ORDERS
                    </div>
                </div>
            </button>
            <button className="sidebarButton" onClick={() => setActiveTab('addresses')}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src="/addresscirclelogo.png" alt="Trippy Tree" style={{ width: "36px", height: '36px', objectFit: 'cover', marginLeft: "4em" }} />
                    <div style={{ marginLeft: "6px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                        ADDRESS
                    </div>
                </div>
            </button>
            <button className="sidebarButton" onClick={signOutUser}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src="/logoutcirclelogo.png" alt="Trippy Tree" style={{ width: "36px", height: '36px', objectFit: 'cover', marginLeft: "4em" }} />
                    <div style={{ marginLeft: "6px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                        LOG OUT
                    </div>
                </div>
            </button>
            <DialogBox
                message={dialogMessage}
                show={showDialog}
                onClose={() => setShowDialog(false)}
            />
        </div>
    );
}

export default Sidebar;
