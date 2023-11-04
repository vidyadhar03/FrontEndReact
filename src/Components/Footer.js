import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section social-links">
                <h3>OUR SOCIAL LINKS</h3>
                <div className="icon-container" >
                    <a href="https://www.instagram.com">
                        <img src="/instalogo.png" alt="Instagram" className="brand-logo" style={{ width: "48px", height: "48px" }} />
                    </a>
                    <a href="https://www.facebook.com" style={{ width: "48px", height: "48px" }}>
                        <img src="/fblogo.png" alt="Facebook" className="brand-logo" style={{ width: "48px", height: "48px" }} />
                    </a>
                    <a href="https://www.gmail.com" >
                        <div style={{ width: "48px", height: "48px", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src="/gmaillogo.png" alt="Gmail"  style={{ width: "38px", height: "38px" }} />
                        </div>
                    </a>

                </div>
            </div>
            <div className="footer-section">
                <h3>FAQ & POLICY</h3>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/exchange-return">Exchange and Return Policy</Link>
                <Link to="/terms-conditions">Terms & Conditions</Link>
                <Link to="/shipping-delivery">Shipping and Delivery Policy</Link>
            </div>
            <div className="footer-section">
                <h3>COMPANY</h3>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/my-account">My Account</Link>
                <Link to="/track-order">Track Order</Link>
            </div>
            <div className="footer-brand">
                <img src="/websitelogo1.png" alt="Trippy Tree Logo" className="brand-logo" />
                <h3>TRIPPY TREE</h3>
                <p>Trippy Tree is a psychedelic wonderland of curated delights.</p>
                {/* <div className="payment-options">
                    <span>Payment Icons</span>
                </div> */}
            </div>
        </footer>
    );
}

export default Footer;
