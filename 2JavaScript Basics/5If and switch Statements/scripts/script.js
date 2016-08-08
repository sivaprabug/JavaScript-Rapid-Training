/*var total = 99.99;
var freeShipping = false;

if (total >= 500.00) {
    freeShipping = true;
}
console.log(freeShipping);*/



/*var total = 100;
var freeShipping;
var savings;
if (total >= 90) {
    freeShipping = true;
    savings = 20;
}; else { // we not given semicolon in conditional statements.
    freeShipping = false;
    savings = 0;
}
console.log(savings);*/


/*var orderType = 'company';
var shipMethod;
if (orderType == 'business')
    shipMethod = 'fedex';
else if (orderType == 'personal')
    shipMethod = 'ups';
else if (orderType == 'company')
		shipMethod = 'ABT';
else
    shipMethod = 'usps'
console.log(shipMethod);
*/


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
console.log(shipMethod);*/



/*var orderType = 'business';
var shipMethod;

switch (orderType) {
    case 'business': // Here these three any cases return fedex only.
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



var age = 16;
var mark = 100;
var grade;

switch (true) { //true means the switch case value taken any one instead of given mark means inside block mark only passing
    case (mark == 100 && age == 18):
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