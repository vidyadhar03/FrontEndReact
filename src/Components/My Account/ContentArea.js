import AccountDetails from "./AccountDetails";
import AddressDisplay from "./AddressDisplay";


const ContentArea = ({ activeTab }) => {
    switch (activeTab) {
        case 'accountDetails':
            return <AccountDetails />;
        case 'orders':
            // You can render the Orders content here
            return <div>Orders Content</div>;
        case 'addresses':
            // And the Addresses content here
            return <AddressDisplay/>;
        case 'logout':
            // Handle logout logic here if you want or handle it in the Sidebar itself
            return <div>Logging out...</div>;
        default:
            return <AccountDetails />;
    }
}

export default ContentArea;
