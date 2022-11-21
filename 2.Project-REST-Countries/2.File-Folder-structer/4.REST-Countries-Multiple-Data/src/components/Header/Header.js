import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is my header!!</h1>
            <nav><a href="/home">Home</a>
            <a href="/countries">Countries</a>
            <a href="/about">About</a></nav>
        </div>
    );
};

export default Header;