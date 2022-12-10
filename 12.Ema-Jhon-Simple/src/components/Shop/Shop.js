import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    useEffect(()=>{
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];
        for(const id in storedCart){
            // console.log(id);
            const addedProduct = products.find(product=>product.id===id);
            if(addedProduct){
                const quantity =storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct);
            }
            setCarts(savedCart);
        }
    },[products])
    const addToCart = (product) =>{
        console.log(product);
        console.log(carts);
        let newCart = [];
        const exists = carts.find(cart=>cart.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...carts, product];
        }
        else{
            const rest = carts.filter(cart=>cart.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCarts(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop'>
            <div className='product-area'>
            {
                products.map(product=><Product product={product} key={product.id}
                addToCart={addToCart}></Product>)
            }
            </div>
            <div className='order'>
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;