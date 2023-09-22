// import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import { IconButton } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { Link,useNavigate } from 'react-router-dom';
import { auth } from './Firebase';

const ToolbarComponent = () => {

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    };
    const navigate = useNavigate();

    const handleAuth = () => {
        var user = auth.currentUser;
        if (user !== null) {
            navigate("/userprofile");
        } else {
            navigate("/authentication");
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', position: 'absolute', zIndex: '9999', width: '100%' }}>
            <div style={{ margin: '10px' }}>
                <Link to={'/'} style={linkStyles}>
                    {/* <Typography variant="h6" component="div">
                        Trippy Tree
                    </Typography> */}
                    <img src="logo192.png" alt="Trippy Tree" style={{ width: '100%', height: '70px', objectFit: 'cover' }} />
                </Link>
            </div>
            <div style={{ alignItems: 'center', display: 'flex', margin: '10px' }}>
                <Link to={'/cart'} style={linkStyles}>
                    <IconButton color="white">
                        <ShoppingCart />
                    </IconButton>
                </Link>
                <IconButton color="white" onClick={handleAuth}>
                    <AccountCircle />
                </IconButton>
            </div>
        </div>
    );
};

export default ToolbarComponent;

