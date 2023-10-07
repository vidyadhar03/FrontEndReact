import { Link } from "react-router-dom";

const Footer = () => {

    const footerStyles = {
        backgroundColor: '#e6eaf0',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop:'80px',
    };

    const sectionStyles = {
        flex: '1 0 33%',
        textAlign: 'center',
    };

    const titleStyles = {
        borderBottom: '1px solid #ccc',
        paddingBottom: '5px',
        marginBottom: '10px',
        marginRight: '10px'
    };

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        listStyle: 'none',
    };

    const ulStyles = {
        padding: 0,
        listStyleType: 'none', // Remove default bullets
    };

    return (
        <footer style={footerStyles}>
            <div style={sectionStyles}>
                <h3 style={titleStyles}>FAQ & Policy</h3>
                <ul style={ulStyles}>
                    <li>
                        <Link to="/faq" style={linkStyles}>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/policy" style={linkStyles}>Terms & Conditions</Link>
                    </li>
                </ul>
            </div>
            <div style={sectionStyles}>
                <h3 style={titleStyles}>Company</h3>
                <ul style={ulStyles}>
                    <li>
                        <Link to="/about" style={linkStyles}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={linkStyles}>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div style={sectionStyles}>
                <h3 style={titleStyles}>Social Links</h3>
                <ul style={ulStyles}>
                    <li>
                        <a href="https://www.facebook.com" style={linkStyles} target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" style={linkStyles} target="_blank" rel="noopener noreferrer">Gmail</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;