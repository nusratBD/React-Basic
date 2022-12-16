import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Shop.css'
const Shop = () => {
    const [search, setSerach] = useState('');
    const [foods, setFoods] = useState([]);
    const [carts, setCarts] = useState([]);
    const Search = (e) =>{
        setSerach(e.target.value);
    };
   useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
    .then(res=>res.json())
    .then(data=>setFoods(data.meals));
   },[search]);
   let saveCart = [];
   const AddToCart = (food) =>{
    saveCart = [...carts, food];
    setCarts(saveCart);
   }
    return (
        <div>
            <h1>Type The First Letter Of Your Desired Food!</h1>
            <input placeholder='Please Type Here.....' onChange={Search}></input>
           <div className='shop'>
           <div className='food-container'>
           {
                foods.map(food=><Food food={food} key={food.idMeal} AddToCart={AddToCart}></Food>)
            }
           </div>
            <div className='cart-container' >
                {/* <h1>Order List</h1>
                <h2>Selected Items: {carts.length}</h2>
                
               {
                    carts.map(cart=><Cart cart={cart} key={cart.idMeal}></Cart>)
                } */}
                <Cart carts={carts}></Cart>
            </div>
           </div>
        </div>
    );
};

export default Shop;