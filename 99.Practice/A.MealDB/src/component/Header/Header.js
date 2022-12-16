import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home' className='link'>Home</Link>
            <Link to='/shop' className='link'>Shop</Link>
            <Link to='/orders' className='link'>Orders</Link>
            <Link to='/inventory' className='link'>Inventory</Link>
        </div>
    );
};

export default Header;