import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name, price, img, seller, ratings} = props.product;
    const cartWrap = () =>{
        props.addToCart(props.product);
    }
    return (
        <div className='product'>
            <img src={img} alt='Shoe'></img>
            <div className='product-info'>
     
            <p className='product-name'>{name}</p>
            <p className='price'>Price: ${price}</p>
            
    
            <p>seller: {seller}</p>
            <p>Ratings: {ratings} starts</p>
            </div>
            <button className='btn' onClick={cartWrap}>
                Buy Now <FontAwesomeIcon icon= {faCartShopping}></FontAwesomeIcon>
            </button>
    
        </div>
    );
};

export default Product;