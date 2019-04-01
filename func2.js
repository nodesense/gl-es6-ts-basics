'use strict';

function showPrice() {
    console.log('Price is ', this.price);
}

// object
var product = {
    price: 99.99,
    showPrice : showPrice
}

product.showPrice();

// calling showPrice method on product scope
showPrice.apply(product, []);

global.price = 66.66;
// is called on global context
// when used with use strict, 
// 'this' become undefined for global context
showPrice(); 