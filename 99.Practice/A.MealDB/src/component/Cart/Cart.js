import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const carts = props.carts;
    return (
        <div style={{position: 'sticky', top:'0'}}>
            <h1>Order List: </h1>
            <h1 className='cart-item'>Selected Items: {carts.length}</h1>
            {
                carts.map(cart=><button>{cart.strMeal}</button>)
            }
        </div>
        
           );
};

export default Cart;