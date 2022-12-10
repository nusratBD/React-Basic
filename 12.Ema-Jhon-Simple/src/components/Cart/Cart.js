import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // console.log(cart);
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for(let i=0; i<cart.length; i++){
        quantity = quantity + cart[i].quantity;
        price = price + (cart[i].price)*(cart[i].quantity);
        shipping = shipping + (cart[i].shipping)
    }
    let tax = (price * 0.1).toFixed(2);
    let total = price + shipping + (+tax);
    console.log(total);
    return (
        <div className='cart'>
            <h2 className='order-summary'>Order Summary</h2>
            <div className='calculation'>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${total.toFixed(2)} </h4>
            </div>
        </div>
    );
};

export default Cart;