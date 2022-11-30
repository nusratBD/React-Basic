const addToCart = id =>{
    const oldCart = localStorage.getItem(id);
    if(oldCart){
    const newCart = parseInt(oldCart) + 1;
    localStorage.setItem(id, newCart);
}
else{
    localStorage.setItem(id, 1);
}
}
export {addToCart};