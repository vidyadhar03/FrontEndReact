import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ToolbarComponent = () => {

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Link to={'/'} style={linkStyles}>
                    <Typography variant="h6" component="div" >
                        Trippy Tree
                    </Typography>
                </Link>
                <div>
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
            </Toolbar>
        </AppBar>
    );
};

export default ToolbarComponent;

