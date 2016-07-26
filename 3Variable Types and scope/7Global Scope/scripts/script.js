'use strict'
var productId = 'PRD-2000';
console.log(productId);
// In browser window is the global object
console.log(window.productId);
console.log(this.productId);


// this and window is equal
console.log(this === window);


/*var name = 'sivaprabu';

function displayName() {
    name = 'Pranav Sivaprabu';
}
displayName();
console.log(name);*/


//var name = 'sivaprabu';
function displayName() {
    name = 'Pranav Sivaprabu';
}
displayName();
console.log(name);