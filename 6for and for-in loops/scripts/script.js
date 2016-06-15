/*var lineItemCount = 3;
for (var i = 0; i <= lineItemCount; i++) {
    console.log(i);
}
*/

/*var lineItemCount = 3;
var i=0;
for (; i <= lineItemCount; i++) {
    console.log(i);
}*/

/*var lineItemCount = 3;
var i = 0;
for (; i <= lineItemCount;) {
    console.log(i++);
}*/


/*var lineItemCount = 3;
var i = 0;
for (; i <= lineItemCount; i++) {
    console.log(i);
    if (i == 1) {
        break;
    }
}*/


/*var lineItemCount = 5;
var i = 0;
for (; i <= lineItemCount; i++) {
    if (i == 1) {
        console.log('i = 1');
        continue;
    }
    console.log(i);

}*/


/*var lineItemCount = 5;

outerLoop:
    for (var i = 0; i <= lineItemCount; i++) {

        for (var j = 0; j <= 3; j++) {
            console.log('j =>' + j);
            /*if (j == 1) {
                continue outerLoop;
            }*/
/* }
        console.log(i);
    }*/


/*var lineItemCount = 5;

outerLoop:
    for (var i = 0; i <= lineItemCount; i++) {

        for (var j = 0; j <= 3; j++) {
            if (j == 1) {
                console.log('j =>' + j);
                continue;
            }
        }
        console.log(i);
    }
*/


// FOR IN LOOP

var lineItem = {
    product: 'Apple',
    quantity: 20,
    price: 250
};

for (var values in lineItem) {
    console.log(values);
}

for (var values in lineItem) {
    console.log(values + '=> ' + lineItem[values]);
}
