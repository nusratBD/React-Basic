import React from 'react';
import './Mugda.css';
const Mugda = (props) => {
    return (
        <div className='mugda'>
            <h1>OPPO Mugda Showroom</h1>
            <h3>Price: {props.price}</h3>
        </div>
    );
};

export default Mugda;