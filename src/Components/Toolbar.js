// import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import { IconButton } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ToolbarComponent = () => {

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    };

    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                <Link to={'/'} style={linkStyles}>
                    {/* <Typography variant="h6" component="div">
                        Trippy Tree
                    </Typography> */}
                    <img src="logo192.png" alt="Trippy Tree" style={{ width: '100%', height: '70px', objectFit: 'cover' }}/>
                </Link>
            </div>
            <div style={{alignItems:'center',display:'flex'}}>
                <Link to={'/cart'} style={linkStyles}>
                    <IconButton color="inherit">
                        <ShoppingCart />
                    </IconButton>
                </Link>
                <Link to={'/authentication'} style={linkStyles}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};

export default ToolbarComponent;

