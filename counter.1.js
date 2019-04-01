// counter.js
// example use case for class and arrow func

class Counter {
    start() {
        this.count = 0;
        let this2 = this;
        // callback method is called by timer object
        // callback method is called by global scope
        setInterval(function callback(){
            // this means global
            this2.count += 1;
            console.log('Count is ', this2.count);
        }, 5000);
    }
}

let c = new Counter();
c.start();