import { auth } from '../Firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ setActiveTab }) => {

    const navigate = useNavigate();

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
        <div className="sidebar">
            <button className="sidebarButton" onClick={() => setActiveTab('accountDetails')}>ACCOUNT DETAILS</button>
            <button className="sidebarButton" onClick={() => setActiveTab('orders')}>ORDERS</button>
            <button className="sidebarButton" onClick={() => setActiveTab('addresses')}>ADDRESS</button>
            <button className="sidebarButton" onClick={signOutUser}>LOG OUT</button>
        </div>
    );
}

export default Sidebar;
