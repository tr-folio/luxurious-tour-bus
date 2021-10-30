import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './Footer.css';

const Footer = () => {
    return (
        <div className="d-flex justify-content-around text-light flex-wrap bg-dark py-5">
            <div className="p-3">
                <h3>Quick Links</h3>
                <p><Link to="/home">Home</Link></p>
                <p><HashLink to="/home#services">Services</HashLink></p>
            </div>
            <div className="p-3">
                <h3>Contact Info</h3>
                <p>Email: abc@example.com</p>
                <p>Phone: 000-000000</p>
                <p>
                    <i className="fab fa-twitter icons"></i>
                    <i className="fab fa-facebook icons"></i>
                    <i className="fab fa-instagram icons"></i>
                </p>
            </div>
        </div>
    );
}

export default Footer;