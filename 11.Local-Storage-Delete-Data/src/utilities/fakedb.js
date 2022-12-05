const addToCart = (id) =>{
let cart;
const store = localStorage.getItem('store-item');
if(store){
    cart = JSON.parse(store);
}
else{
    cart = {};
}
const quantity = cart[id];
if(quantity){
    const newCart = quantity + 1;
    cart[id] = newCart;
}
else{
    cart[id] = 1;
}
localStorage.setItem('store-item', JSON.stringify(cart));
}

const removeFromCart = (id) =>{
let cart;
const store = localStorage.getItem('store-item');
if(store){
    cart = JSON.parse(store);
    if(id in cart){
        delete cart[id];
    }
    localStorage.setItem('store-item', JSON.stringify(cart));
}
}

const deleteFullCart = () =>{
localStorage.removeItem('store-item');
}

//Reducer: A fancy system of array sum.
const reducer = () =>{
const numbers = [23, 12, 34, 56, 86];
const sum = (current, previous) => current + previous;
const total = numbers.reduce(sum, 0);
return total;
}

//Object reduce
const objRed = () =>{
    const products = [
        {id: 1, name: "Watch", price: 500},
        {id: 2, name: "Mug", price: 250},
        {id: 3, name: "Diary", price: 300}
    ];
    const objSum = (previous, current) => previous + current.price;
    const objTotal = products.reduce(objSum, 0);
    return objTotal;
}
export {addToCart, removeFromCart, deleteFullCart, reducer, objRed};