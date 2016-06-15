/*var total = 99.99;
var freeShipping = false;

if (total >= 500.00) {
    freeShipping = true;
}
console.log(freeShipping);
*/


/*var total = 100;
var freeShipping;
var savings;
if (total >= 90) {
    freeShipping = true;
    savings = 20;
} else { // we not given semicolon in conditional statements.
    freeShipping = false;
    savings = 0;
}
console.log(savings);*/


/*var orderType = 'military';
var shipMethod;
if (orderType == 'business')
    shipMethod = 'fedex';
else if (orderType == 'personal')
    shipMethod = 'ups';
else
    shipMethod = 'usps'
console.log(shipMethod);*/



/*var orderType = 'personal';
var shipMethod;

switch (orderType) {
    case 'business':
        shipMethod = 'fedex';
        break; // Need break for every case
    case 'personal':
        shipMethod = 'ups';
        break;
    default:
        shipMethod = 'usps'
}
console.log(shipMethod);*/



/*var orderType = 'business';
var shipMethod;

switch (orderType) {
    case 'business':
        shipMethod = 'ups';
    case 'personal':
        shipMethod = 'fedex';
        break;
    default:
        shipMethod = 'usps'
}
console.log(shipMethod);
*/


/*var orderType = 'business';
var shipMethod;

switch (orderType) {
    case 'business':
    case 'government':
    case 'personal':
        shipMethod = 'fedex';
        break;
    default:
        shipMethod = 'usps'
}
console.log(shipMethod);*/


/*var orderType = 'business';
var shipMethod;

switch (orderType) {
    case 'business':
    case 'government':
    case 'personal':
        shipMethod = 'fedex';
        break;
    default:
        shipMethod = 'usps'
}
console.log(shipMethod);*/


/*var orderType = 'unknown';
var shipMethod;

switch (orderType) {
    case 'business':
    case 'government':
    case 'personal':
        shipMethod = 'fedex';
        break;
}
console.log(shipMethod);*/



var mark = 90;
var grade;

switch (true) {
    case (mark == 100):
        grade = 'A';
        break;
    case (mark >= 90 && mark <= 99):
        grade = 'B';
        break;

    case (mark > 75 && mark < 90):
        grade = 'C'
        break;
    default:
        grade = 'D';
}
console.log(grade);
