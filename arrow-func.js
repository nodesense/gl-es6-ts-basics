
// ES6 styled, arrow function
const add = (a, b) => a + b;
const power = n => n * n; // single param

const show = () => console.log('Welcome'); // no arg func

// multiline function
// needs return keyword
const sub = (a, b) => { // block need explicit return
    console.log(a, b);
    return a - b;
}

console.log(add(10, 20));
console.log(power(5));

show();

console.log('sub ', sub(10, 5));