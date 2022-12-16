import React from 'react';
import './Food.css';
const Food = (props) => {
    const {strMeal, strInstructions, strMealThumb} = props.food;
    const AddToCart = props.AddToCart;
    return (
        <div className='food'>
            <img src={strMealThumb} alt={strMeal}></img>
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <div className='food-btn'  onClick={()=>AddToCart(props.food)}>Add To Cart
        </div></div>
    );
};

export default Food;