import React from 'react';
import { addToCart } from '../../utilities/fakedb';
import './User.css';
const User = (props) => {
    const {name, age, phone, address, email, company, gender, balance, id} =props.user;
    const addCart = () =>{
        console.log('Add To Cart: ', id, name);
    }
    const addCart2 = (id) =>{
        console.log('Add To Cart2: ',id, name);
    }
    const showCart2 = () =>{
        addCart2(id);
    }
    const local = (id) =>{
        addToCart(id);
    }
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
            <button onClick={addCart}>Add To Cart: 1</button>
            <button onClick={showCart2}>Add To Cart: 2</button>
            <button onClick={() =>{addCart2(id)}}>Add To Cart: 3</button>
            <button onClick={()=>{local(id)}}>Local Storage</button>
        </div>
    );
};

export default User;