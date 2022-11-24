import React from 'react';
import './User.css';
const User = (props) => {
    const {name, age, phone, address, email, company, gender, balance, id} =props.user;
    return (
        <div className='user'>
            <h1>ID: {id}</h1>
            <h2>Name: {name}</h2>
            <h3>Gender: {gender}</h3>
            <h3>Age: {age}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Email: {email}</h3>
            <h3>Company: {company}</h3>
            <h3>Balance: {balance}</h3>
            <h3>Address: {address}</h3>
        </div>
    );
};

export default User;