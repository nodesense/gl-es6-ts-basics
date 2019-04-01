// math.js
function add(a, b) {
    return a + b;
}

// common.js, module, export and require
// export from here, outside JS spec

module.exports.add = add;
module.exports.sub = function(a, b) {
    return a - b;
}

