/**
 * Convert a binary String to a Number
 */
exports.binaryToDecimal = function(str) {
    str = parseInt(str, 2);
    return str;
};

/**
 * Add two Numbers with a precision of 2
 */
exports.add =  function(a, b) {
    var total = a + b;    
    total = total.toPrecision(2);
    total = parseFloat(total);
    return total;
};

/**
 * Multiply two Numbers with a precision of 4
 */
exports.multiply =  function(a, b) {
    var total = a * b;    
    total = total.toPrecision(2);
    total = parseFloat(total);
    return total; 
};
