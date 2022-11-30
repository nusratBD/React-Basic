const addToCart = (id) =>{
console.log(id);
let cart;
const storedCart = localStorage.getItem('cart-item');
if(storedCart){
    cart = JSON.parse(storedCart);
}else{
    cart = {};
}
const quantity = cart[id];
if(quantity){
    const newQuantity = quantity + 1;
    cart[id] = newQuantity;
}
else{
    cart[id] = 1;
}
localStorage.setItem('cart-item', JSON.stringify(cart));
}
export {addToCart};