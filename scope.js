// js, move var title here
// hoisting
if (true) {
    // ES5
    // var statement, moved outside block scope
    // js doesn't support block scope
    var title = 'node';
    console.log(title);
}

if (true) {
    var title = 'testing';
    console.log(title);
}

console.log(title);