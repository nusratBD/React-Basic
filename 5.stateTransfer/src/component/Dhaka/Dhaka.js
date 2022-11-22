import React from 'react';
import Mugda from '../Mugda/Mugda';
import './Dhaka.css';
const Dhaka = (props) => {
    return (
        <div className='dhaka'>
            <h1>OPPO Dhaka Show Rooms</h1>
            <h3>Price: {props.price}</h3>
            <Mugda price={props.price}></Mugda>
        </div>
    );
};

export default Dhaka;