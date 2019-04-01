// counter2.js
// example use case for class and arrow func

class Counter {
    start() {
        this.count = 0;
        
        // => function preserve this in lexical context
        // ie class scope
        setInterval(() => {
            this.count += 1;
            console.log('Count is ', this.count);
        }, 5000);
    }
}

let c = new Counter();
c.start();