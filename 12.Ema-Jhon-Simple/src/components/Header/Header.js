import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
        <img src={logo} alt="logo"></img>
        <div className='list'><a href>Home</a>
        <a href>About</a>
        <a href>Shop</a>
        <a href>Contact</a></div>
        </nav>

    );
};

export default Header;