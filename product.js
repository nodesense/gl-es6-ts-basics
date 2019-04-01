class Product {

    // keyword
    constructor(price){
        console.log('product cons');
        // initialize properties
        this.price = price;
    }

    // method
    show() {
        console.log('Product Details');
        console.log('Price ', this.price);
    }
}

class MobileProduct extends Product {
    constructor(price, discount) { 
        super(price); // must base class cons
        this.discount = discount;
    }

    calculate() {
        this.amount = (this.price - this.price * this.discount / 100) * 1.18;
    }

    show() {
        console.log('--------')
        super.show(); // calls base class show func
        console.log('Discount ', this.discount);
        console.log('Amount', this.amount);
    }

    // class method, call this method using class 
    static getType() {
        return 'Mobile';
    }

}

// create instance for Product class
let p = new Product(100);
p.show();

let p2 = new Product(200);
p2.show();

let p3 = new MobileProduct(10000, 10);
// p3.show();; // base class method
p3.calculate(); // derived class method
console.log('Amount is ', p3.amount);
p3.show();
 
// static is a class method
console.log(MobileProduct.getType());