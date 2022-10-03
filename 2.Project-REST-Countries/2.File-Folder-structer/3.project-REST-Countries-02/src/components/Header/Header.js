import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>This is our header component</h1>
            <nav>
                <a href="/home" className="href">Home</a>
                <a href="/about" className="href">About Us</a>
                <a href="/contact" className="href">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;