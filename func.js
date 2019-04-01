
function mul(a, b) {
    return a  * b;
}

// functions are object

console.log(mul(10,20));
console.log(mul.apply(undefined, [10,20]));
console.log(mul.call(undefined, 10,20));

//whoever invoke showPrice method, own the this context
function showPrice() {
    console.log('Price is ', this.price);
}

// object
var product = {
    price: 99.99
}

product.showPrice = showPrice;

product.showPrice();

// calling showPrice method on product scope
showPrice.apply(product, []);

var product2 = {
    price: 88.88,
    showPrice: showPrice
}

product2.showPrice()

// calling showPrice directly
// node.js global is keyword

global.price = 66.66;
// is called on global context
showPrice(); // 'this' refers to global context
// global.showPrice();
// this.showPrice();