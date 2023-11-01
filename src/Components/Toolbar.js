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
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent',position:'absolute', zIndex: '9999', width: '100%' }}>
            <div style={{ margin: '10px' }}>
                <Link to={'/'} style={linkStyles}>
                    {/* <Typography variant="h6" component="div">
                        Trippy Tree
                    </Typography> */}
                    <img src="/websitelogo1.png" alt="Trippy Tree" style={{ width:"auto", height: '70px', objectFit: 'cover' }} />
                </Link>
            </div>
            <div style={{ alignItems: 'center', display: 'flex',flexDirection:"row", margin: '10px',justifyContent:"center",alignContent:"center" }}>
                <Link to={'/cart'} style={linkStyles}>
                <img src="/shoppingcirclelogo.png" alt="Trippy Tree" style={{ marginTop:"2px",cursor:"pointer",width:"32px", height: '32px', objectFit: 'cover' }} />
                </Link>
                <img src="/accountcirclelogo.png" alt="Trippy Tree" style={{ cursor:"pointer",width:"36px", height: '36px', objectFit: 'cover' }} onClick={handleAuth} />
            </div>
        </div>
    );
};

export default ToolbarComponent;

